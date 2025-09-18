import React from "react";
// Assumes you have a globals.css file for Tailwind CSS setup.
// import '../styles/globals.css';

// The _app.js component is a top-level wrapper for all pages.
// It's the ideal place for shared layouts like headers and footers.
function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-inter text-gray-800">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <script src="https://cdn.tailwindcss.com"></script>
      
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-teal-600">MendaMart</a>
        <nav className="space-x-4">
          <a href="/" className="text-gray-600 hover:text-teal-600">Home</a>
          <a href="/services" className="text-gray-600 hover:text-teal-600">Services</a>
        </nav>
      </header>

      {/* The main content area where each page component will be rendered */}
      <main className="flex-1">
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-auto">
        &copy; 2024 MendaMart. All rights reserved.
      </footer>
    </div>
  );
}

export default MyApp;
