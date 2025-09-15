import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { rating, review_text, artisan_id, customer_id, job_id } = req.body;

  try {
    const { data, error } = await supabase
      .from("reviews")
      .insert([{ rating, review_text, artisan_id, customer_id, job_id }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: "Failed to submit review." });
    }

    res.status(201).json({ message: "Review submitted successfully!" });
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
}