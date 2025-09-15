import { useRouter } from 'next/router';
import Nav from '../../../components/Nav';

export default function PaymentFailed() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Nav />
      <main className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <svg
          className="w-24 h-24 text-red-500 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-lg text-gray-700">
          We encountered an issue processing your payment. Please try again or contact support.
        </p>
        <div className="mt-8">
          <p className="text-sm text-gray-500">Job ID: {id}</p>
        </div>
        <button
          onClick={() => router.push(`/jobs/${id}/pay`)}
          className="mt-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </main>
    </div>
  );
}