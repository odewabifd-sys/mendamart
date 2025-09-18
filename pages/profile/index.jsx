import React from 'react';

// Inline SVG icons to avoid external dependencies.
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-3.76 3.76a2 2 0 0 1-2.83 0l-2.83-2.83a2 2 0 0 1 0-2.83l3.76-3.76a6 6 0 0 1 7.94-7.94l-3.76 3.76a1 1 0 0 0 0 1.4Z"/><path d="m21 21-4.3-4.3"/></svg>
);
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const PaintbrushIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paintbrush"><path d="M18.3 12.6C20 12.3 21 11 21 9.5a5.5 5.5 0 0 0-5.5-5.5c-1.7 0-3 1-3.3 2.7L8.7 13.5c-.7.7-.7 1.7 0 2.4l2.5 2.5c.7.7 1.7.7 2.4 0Z"/><path d="M17.8 15.6 13.5 11.3"/><path d="m15 17 2.5 2.5c.7.7 1.7.7 2.4 0l2.5-2.5c.7-.7.7-1.7 0-2.4l-2.5-2.5"/><path d="M5 21a1 1 0 0 1-2 0c0-1.4 1.4-2.5 2.5-2.5H16.5"/></svg>
);
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const ServiceCard = ({ icon, title }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
    <div className="text-teal-600 mb-4 mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-teal-50">
      {icon}
    </div>
    <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
  </div>
);

const TestimonialCard = ({ quote, name, service }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
          <UserIcon />
        </div>
      </div>
      <div className="ml-4">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{service}</p>
      </div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Search */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 py-20 bg-gradient-to-br from-teal-50 to-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          Your Local <span className="text-teal-600">Artisan</span> Hub
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mb-8">
          Find and hire trusted plumbers, electricians, carpenters, and more in Nigeria with just a few clicks.
        </p>
        <div className="w-full max-w-xl flex rounded-full shadow-lg overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-teal-500 transition-all duration-300">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"/>
            <input
              type="text"
              placeholder="Search for a service..."
              className="w-full py-4 pl-12 pr-4 text-gray-800 rounded-full focus:outline-none"
            />
          </div>
          <button className="bg-teal-600 text-white px-8 py-4 font-semibold hover:bg-teal-700 transition-colors duration-300">
            Search
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4">Services We Offer</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          From minor fixes to major projects, find the right professional for your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 container mx-auto">
          <ServiceCard icon={<WrenchIcon className="w-8 h-8"/>} title="Plumbing" />
          <ServiceCard icon={<ZapIcon className="w-8 h-8"/>} title="Electrical Work" />
          <ServiceCard icon={<PaintbrushIcon className="w-8 h-8"/>} title="Painting" />
        </div>
        <a href="/services" className="mt-12 inline-block px-8 py-4 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-300">
          Explore All Services
        </a>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Trusted by many, here's why our users love MendaMart.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 container mx-auto">
          <TestimonialCard
            quote="MendaMart saved my day! The electrician was professional, on time, and fixed the issue perfectly. Highly recommend this service."
            name="Aisha A."
            service="Electrical Repair"
          />
          <TestimonialCard
            quote="Finding a reliable plumber has always been a headache. With MendaMart, I found a verified artisan in minutes. Fantastic service!"
            name="Chike O."
            service="Plumbing"
          />
        </div>
      </section>

      {/* Call to Action for Artisans */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold mb-4">Become a MendaMart Artisan</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Join our network of skilled professionals and grow your business.
          </p>
          <a href="/auth/signup" className="inline-block px-10 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
            Join Now
          </a>
        </div>
      </section>
    </>
  );
}
