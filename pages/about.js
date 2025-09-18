import React from 'react';

// Inline SVG icons to avoid external dependencies.
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);
const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m12 17-5 5-5-5"/><path d="m12 17 5 5 5-5"/><path d="M16 12l-4-4-4 4"/></svg>
);
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 text-center bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Our Story
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MendaMart is a Nigerian-based platform that connects users with skilled artisans
            across the country. We believe in empowering local professionals and providing
            customers with reliable, high-quality services.
          </p>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <StarIcon className="w-8 h-8"/>
              </div>
              <h3 className="font-semibold text-xl mb-2">Trust & Quality</h3>
              <p className="text-gray-600">
                We meticulously vet all our artisans to ensure you receive services of the highest quality and professionalism.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <HandshakeIcon className="w-8 h-8"/>
              </div>
              <h3 className="font-semibold text-xl mb-2">Community</h3>
              <p className="text-gray-600">
                We are building a strong community where artisans can thrive and customers can easily find the help they need.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <GlobeIcon className="w-8 h-8"/>
              </div>
              <h3 className="font-semibold text-xl mb-2">Accessibility</h3>
              <p className="text-gray-600">
                Our platform is designed to make finding and hiring skilled labor effortless for everyone, everywhere in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How MendaMart Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-600 text-white font-bold text-2xl mb-4">
                1
              </div>
              <h3 className="font-semibold text-xl mb-2">Find an Artisan</h3>
              <p className="text-gray-600">
                Search our directory of verified professionals by service, location, or rating.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-600 text-white font-bold text-2xl mb-4">
                2
              </div>
              <h3 className="font-semibold text-xl mb-2">Connect & Book</h3>
              <p className="text-gray-600">
                Contact the artisan directly, discuss your project, and schedule a service at your convenience.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-600 text-white font-bold text-2xl mb-4">
                3
              </div>
              <h3 className="font-semibold text-xl mb-2">Get It Done</h3>
              <p className="text-gray-600">
                The artisan completes the job, and you provide a rating and review to help the community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
