import React from 'react';
import Link from 'next/link'; // This line is new

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <div className="flex flex-col items-center w-full flex-1 px-4 sm:px-20 text-center">
        <div className="py-12 sm:py-24 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
            Find the perfect <span className="text-teal-600">artisan</span> for your needs.
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            MendaMart is your go-to platform to find skilled and reliable electricians, plumbers, and more, right in your neighborhood.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            {/* The first <a> tag is now wrapped in a <Link> component */}
            <Link href="/search">
              <a className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105">
                Explore Services
              </a>
            </Link>
            {/* The second <a> tag is now wrapped in a <Link> component */}
            <Link href="/profile">
              <a className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition duration-300 ease-in-out">
                Join as an Artisan
              </a>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-4xl px-4 py-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-4 text-center">
              <div className="text-4xl text-teal-600 mb-2">
                <span role="img" aria-label="search">🔍</span>
              </div>
              <h3 className="text-xl font-bold">1. Find Artisans</h3>
              <p className="mt-2 text-gray-600">
                Browse through a wide range of vetted professionals by skill and location.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 text-center">
              <div className="text-4xl text-teal-600 mb-2">
                <span role="img" aria-label="chat">💬</span>
              </div>
              <h3 className="text-xl font-bold">2. Connect Instantly</h3>
              <p className="mt-2 text-gray-600">
                Use our built-in chat to discuss your project and get quotes directly.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 text-center">
              <div className="text-4xl text-teal-600 mb-2">
                <span role="img" aria-label="tools">🛠️</span>
              </div>
              <h3 className="text-xl font-bold">3. Get it Done</h3>
              <p className="mt-2 text-gray-600">
                Hire the right person for the job and get your tasks completed efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}