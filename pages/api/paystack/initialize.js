import paystack from "paystack";

const Paystack = paystack(process.env.PAYSTACK_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { amount, email, jobId } = req.body;

  try {
    const response = await Paystack.transaction.initialize({
      amount,
      email,
      callback_url: `${req.headers.origin}/api/paystack/verify?jobId=${jobId}`,
      metadata: {
        job_id: jobId,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Paystack initialization error:", error.response.data);
    res.status(500).json({ error: "Failed to initialize payment" });
  }
}