import React, { useState } from 'react';

// This is a single-file React component. All components and logic are contained here.
// You can use a build tool like Vite or create-react-app to run this in a project.

// Inline SVG icons from Lucide-React to avoid external dependencies.
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucude-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
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
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);
const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m12 17-5 5-5-5"/><path d="m12 17 5 5 5-5"/><path d="M16 12l-4-4-4 4"/></svg>
);
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>
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

// Placeholder Components to fix the build error
const ServicesPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-extrabold text-gray-900">Services Page Coming Soon!</h1>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-extrabold text-gray-900">Contact Us!</h1>
  </div>
);

const ForgotPasswordPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-extrabold text-gray-900">Password Reset Page</h1>
  </div>
);

const HomePage = ({ onNavigate }) => (
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
      <button onClick={() => onNavigate('services')} className="mt-12 inline-block px-8 py-4 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-300">
        Explore All Services
      </button>
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
        <button onClick={() => onNavigate('signup')} className="inline-block px-10 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
          Join Now
        </button>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-gray-400 py-10 text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <h3 className="text-2xl font-bold text-white mb-4">MendaMart</h3>
        <p className="text-sm">Connecting you with the best local artisans in Nigeria.</p>
        <div className="flex justify-center space-x-6 mt-6">
          <button onClick={() => {}} className="hover:text-white transition duration-300">Facebook</button>
          <button onClick={() => {}} className="hover:text-white transition duration-300">Twitter</button>
          <button onClick={() => {}} className="hover:text-white transition duration-300">LinkedIn</button>
          <button onClick={() => {}} className="hover:text-white transition duration-300">TikTok</button>
        </div>
        <p className="mt-6 text-xs text-gray-500">&copy; 2024 MendaMart. All rights reserved.</p>
      </div>
    </footer>
  </>
);

const AboutPage = ({ onNavigate }) => (
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

    {/* Call to Action for Artisans */}
    <section className="py-20 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Find a service today or join our network of skilled artisans.
        </p>
        <div className="flex justify-center space-x-4">
          <button onClick={() => onNavigate('services')} className="inline-block px-10 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
            Explore Services
          </button>
          <button onClick={() => onNavigate('signup')} className="inline-block px-10 py-4 border border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
            Join as an Artisan
          </button>
        </div>
      </div>
    </section>
  </>
);

const LoginForm = ({ onNavigate }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-2xl">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Log in to your account
        </h2>
      </div>
      <form className="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm transition-all duration-200"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm transition-all duration-200"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <button onClick={() => onNavigate('forgot-password')} className="font-medium text-teal-600 hover:text-teal-500">
              Forgot your password?
            </button>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
          >
            Sign in
          </button>
        </div>
      </form>
      <p className="mt-2 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <button onClick={() => onNavigate('signup')} className="font-medium text-teal-600 hover:text-teal-500">
          Sign up
        </button>
      </p>
    </div>
  </div>
);

const SignupForm = ({ onNavigate }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-2xl">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>
      <form className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm transition-all duration-200"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm transition-all duration-200"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm transition-all duration-200"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
          >
            Sign up
          </button>
        </div>
      </form>
      <p className="mt-2 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button onClick={() => onNavigate('login')} className="font-medium text-teal-600 hover:text-teal-500">
          Log in
        </button>
      </p>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigation} />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginForm onNavigate={handleNavigation} />;
      case 'signup':
        return <SignupForm onNavigate={handleNavigation} />;
      case 'forgot-password':
        return <ForgotPasswordPage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-inter bg-gray-50 text-gray-800">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        `}
      </style>
      <script src="https://cdn.tailwindcss.com"></script>
      
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <button onClick={() => handleNavigation('home')} className="text-3xl font-extrabold text-teal-600">
            MendaMart
          </button>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <button onClick={() => handleNavigation('home')} className="hover:text-teal-600 transition duration-300">Home</button>
            <button onClick={() => handleNavigation('about')} className="hover:text-teal-600 transition duration-300">About</button>
            <button onClick={() => handleNavigation('services')} className="hover:text-teal-600 transition duration-300">Services</button>
            <button onClick={() => handleNavigation('contact')} className="hover:text-teal-600 transition duration-300">Contact</button>
            <button onClick={() => handleNavigation('login')} className="px-4 py-2 border border-teal-600 text-teal-600 rounded-full hover:bg-teal-50 transition duration-300">Login</button>
            <button onClick={() => handleNavigation('signup')} className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition duration-300">Sign up</button>
          </nav>
        </div>
      </header>

      {renderPage()}
    </div>
  );
}
