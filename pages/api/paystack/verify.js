import paystack from "paystack";
import { createClient } from "@supabase/supabase-js";

const Paystack = paystack(process.env.PAYSTACK_SECRET_KEY);
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  const { reference, jobId } = req.query;

  if (!reference) {
    return res.status(400).json({ message: "No reference provided" });
  }

  try {
    const response = await Paystack.transaction.verify(reference);
    const { status, amount, metadata } = response.data;

    if (status === "success" && metadata.job_id === jobId) {
      // Update the job status in your Supabase database
      const { data, error } = await supabase
        .from("jobs") // Assuming your jobs table is named 'jobs'
        .update({
          payment_status: "paid",
          payment_reference: reference,
          paid_at: new Date(),
        })
        .eq("id", jobId);

      if (error) {
        console.error("Supabase update error:", error);
        return res.redirect(`/jobs/${jobId}/payment-failed`);
      }

      // Redirect to a success page
      res.redirect(`/jobs/${jobId}/payment-success`);
    } else {
      // Payment verification failed
      res.redirect(`/jobs/${jobId}/payment-failed`);
    }
  } catch (error) {
    console.error("Paystack verification error:", error);
    res.redirect(`/jobs/${jobId}/payment-failed`);
  }
}