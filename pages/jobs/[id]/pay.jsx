import { useRouter } from "next/router";
import { useState } from "react";
import Nav from "../../../components/Nav";

export default function PayJob() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePay = async () => {
    setLoading(true);
    setError(null);

    // In a real app, you would fetch job details from Supabase here
    const jobDetails = {
      amount: 500000, // Amount in kobo (e.g., 5000 NGN)
      email: "test@example.com", // The customer's email from the session
      jobId: id,
    };

    try {
      const response = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobDetails),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to initialize payment");
      }

      // Redirect the user to Paystack's payment page
      window.location.href = data.authorization_url;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Nav />
      <main className="container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 my-8">
          Complete Your Payment
        </h1>
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
          <p className="text-gray-600 mb-4">Job ID: {id}</p>
          <p className="text-xl font-semibold text-blue-600 mb-6">
            Amount: ₦5,000.00
          </p>
          <p className="text-sm text-gray-500 mb-6">
            You will be redirected to a secure Paystack page to complete the
            payment.
          </p>
          <button
            onClick={handlePay}
            disabled={loading}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Redirecting..." : "Pay Now"}
          </button>
          {error && (
            <p className="text-red-500 mt-4 text-sm font-medium">{error}</p>
          )}
        </div>
      </main>
    </div>
  );
}