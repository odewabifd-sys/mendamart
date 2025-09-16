import React, { useState, useEffect } from "react";

// Placeholder for the Nav component
const Nav = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-800">My App</h1>
      </div>
    </nav>
  );
};

export default function PayJob() {
  // We'll simulate the router's query behavior
  const router = {
    query: { id: "12345" },
  };
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true once the component has mounted on the client
    setIsClient(true);
  }, []);

  const handlePay = async () => {
    setLoading(true);
    setError(null);

    // This block of code will only run on the client due to the button's onClick event
    const jobDetails = {
      amount: 500000,
      email: "test@example.com",
      jobId: id,
    };

    try {
      // We'll simulate the API call and response
      console.log("Simulating API call with:", jobDetails);
      const data = {
        authorization_url: "https://example.com/paystack/payment-page",
      };

      // Redirect the user to Paystack's payment page on the client
      if (isClient) {
        // Since we can't actually redirect, we'll log the action
        console.log("Redirecting to:", data.authorization_url);
        // Replace with window.location.href in your actual app
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // The rendering logic is now safe from pre-rendering errors
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <main className="container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 my-8 text-center">
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
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}
