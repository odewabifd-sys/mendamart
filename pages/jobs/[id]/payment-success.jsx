import { useRouter } from 'next/router';
import Nav from '../../../components/Nav';

export default function PaymentSuccess() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Nav />
      <main className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <svg
          className="w-24 h-24 text-green-500 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-700">
          Thank you for your payment. Your job has been successfully created and the artisan has been notified.
        </p>
        <div className="mt-8">
          <p className="text-sm text-gray-500">Job ID: {id}</p>
        </div>
        <button
          onClick={() => router.push('/dashboard/customer')}
          className="mt-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard
        </button>
      </main>
    </div>
  );
}