import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, addDoc, onSnapshot, collection } from 'firebase/firestore';

// Define Firebase config from the global variable
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// The combined AuthForm component to handle both login and signup
const AuthForms = () => {
  const [currentView, setCurrentView] = useState('login'); // State to toggle between 'login' and 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAuth = async (e, authType) => {
    e.preventDefault();
    setMessage(`${authType === 'login' ? 'Logging in...' : 'Signing up...'}`);
    
    // This is a placeholder for your actual Supabase auth logic.
    // Replace this with your Supabase client calls.
    console.log(`Attempting to ${authType} with:`, { email, password });
    
    // Simulate a successful auth action
    setTimeout(() => {
      setMessage(`${authType === 'login' ? 'Login' : 'Signup'} successful! This is a client-side placeholder.`);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6 rounded-2xl shadow-xl bg-white border border-gray-200 w-full max-w-sm mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">{currentView === 'login' ? 'Login' : 'Sign Up'}</h2>
      
      <form onSubmit={(e) => handleAuth(e, currentView)} className="w-full space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
        />
        <button 
          type="submit" 
          className="w-full px-4 py-3 text-white rounded-lg shadow-md transition duration-300 ease-in-out"
          style={{ backgroundColor: currentView === 'login' ? '#00A19D' : '#00C853' }} // Using hardcoded colors for a distinct look
        >
          {currentView === 'login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}

      <button 
        onClick={() => setCurrentView(currentView === 'login' ? 'signup' : 'login')} 
        className="mt-4 text-sm text-teal-600 hover:text-teal-800 transition-colors duration-300"
      >
        {currentView === 'login' ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
      </button>
    </div>
  );
};

// New Contact Form component with Firebase integration
const ContactForm = ({ db, userId }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    // Simple email validation
    if (!email.includes('@')) {
      setMessage('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      // Add the email to the 'contact_emails' collection
      await addDoc(collection(db, `/artifacts/${appId}/public/data/contact_emails`), {
        email,
        submittedAt: new Date(),
        userId: userId
      });
      setMessage('Thank you for your message! We will be in touch shortly.');
      setEmail('');
    } catch (error) {
      console.error("Error writing document: ", error);
      setMessage('Failed to submit. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6 rounded-2xl shadow-xl bg-white border border-gray-200 w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
      <p className="text-gray-600 text-center">Enter your email and we'll get back to you.</p>
      
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
          required
        />
        <button 
          type="submit" 
          disabled={loading}
          className="w-full px-4 py-3 text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      
      {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
    </div>
  );
};

// Component for the "Explore Services" page
const ExploreServicesPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-teal-600 mb-4 animate-fadeIn">Explore Services</h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
        This is where you'd list all the amazing services available on MendaMart.
      </p>
      <div className="mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xl text-gray-800">
          <li className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <span role="img" aria-label="tools" className="mr-2">🔧</span>Plumbing
          </li>
          <li className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <span role="img" aria-label="light-bulb" className="mr-2">💡</span>Electrical
          </li>
          <li className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <span role="img" aria-label="paint-brush" className="mr-2">🎨</span>Painting
          </li>
          <li className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <span role="img" aria-label="hammer" className="mr-2">🔨</span>Carpentry
          </li>
          <li className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <span role="img" aria-label="garden" className="mr-2">🌱</span>Gardening
          </li>
          <li className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <span role="img" aria-label="house" className="mr-2">🧹</span>Cleaning
          </li>
        </ul>
      </div>
      <button 
        onClick={() => setCurrentPage('home')}
        className="mt-12 px-8 py-4 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Go Back to Home
      </button>
    </div>
  );
};

// Component for the Home page content
const HomeContent = ({ db, userId, setCurrentPage }) => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        
        {/* --- Hero Section --- */}
        <section id="hero" className="py-16 sm:py-24 w-full bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-20 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
              Find the perfect <span className="text-teal-600">artisan</span> for your needs.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              MendaMart is your go-to platform to find skilled and reliable electricians, plumbers, and more, right in your neighborhood.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button 
                onClick={() => setCurrentPage('explore-services')}
                className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
                Explore Services
              </button>
              <a href="#auth-forms" className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl border-2 border-teal-600 hover:bg-teal-50 transition duration-300 ease-in-out">
                Join as an Artisan
              </a>
            </div>
          </div>
        </section>

        {/* --- How it works Section --- */}
        <section id="how-it-works" className="w-full bg-gray-100 py-16 sm:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-8 bg-white rounded-2xl shadow-xl border border-gray-200">
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
        </section>

        {/* --- Login/Signup Form Section --- */}
        <section id="auth-forms" className="w-full bg-white py-16 sm:py-24">
          <div className="container mx-auto px-4 max-w-md">
            <AuthForms />
          </div>
        </section>
        
        {/* --- Contact Section --- */}
        <section id="contact" className="w-full bg-gray-200 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-20 max-w-4xl text-center">
            {/* Conditional rendering of the form based on Firebase initialization */}
            {db && userId ? (
              <ContactForm db={db} userId={userId} />
            ) : (
              <p className="text-gray-600">Loading contact form...</p>
            )}
          </div>
        </section>
    </main>
  );
};

// Main App component
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Initialize Firebase
    if (Object.keys(firebaseConfig).length === 0) {
      console.error("Firebase config is not defined. App will not function correctly.");
      return;
    }

    try {
      const app = initializeApp(firebaseConfig);
      const firestoreDb = getFirestore(app);
      const firebaseAuth = getAuth(app);
      setDb(firestoreDb);
      setAuth(firebaseAuth);

      // Listen for auth state changes
      onAuthStateChanged(firebaseAuth, async (user) => {
        if (user) {
          // A user is signed in.
          setUserId(user.uid);
          // Now that we have a user, we can safely attach the listener
          const q = collection(firestoreDb, `/artifacts/${appId}/public/data/contact_emails`);
          onSnapshot(q, (querySnapshot) => {
            console.log("Real-time updates for contact emails:");
            querySnapshot.forEach((doc) => {
              console.log(doc.data());
            });
          });
        } else {
          // No user is signed in, so we sign in anonymously
          const initialToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
          if (initialToken) {
            signInWithCustomToken(firebaseAuth, initialToken).catch((error) => {
              console.error("Custom token sign-in failed:", error);
            });
          } else {
            signInAnonymously(firebaseAuth).catch((error) => {
              console.error("Anonymous sign-in failed:", error);
            });
          }
        }
      });
    } catch (error) {
      console.error("Failed to initialize Firebase:", error);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* --- Header & Navigation Bar --- */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="text-2xl font-bold text-teal-600 transition-colors duration-300 hover:text-teal-700">MendaMart</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#hero" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">Home</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">How it works</a>
            <a href="#auth-forms" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">Join</a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">Contact</a>
            <button
              onClick={() => setCurrentPage('explore-services')}
              className="px-5 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition duration-300 ease-in-out"
            >
              Explore Services
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu (toggled by state) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4 transition-all duration-300 ease-in-out">
            <a href="#hero" onClick={toggleMobileMenu} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 transition-colors duration-300">Home</a>
            <a href="#how-it-works" onClick={toggleMobileMenu} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 transition-colors duration-300">How it works</a>
            <a href="#auth-forms" onClick={toggleMobileMenu} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 transition-colors duration-300">Join</a>
            <a href="#contact" onClick={toggleMobileMenu} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 transition-colors duration-300">Contact</a>
            <button
              onClick={() => {
                setCurrentPage('explore-services');
                toggleMobileMenu(); // Close menu after click
              }}
              className="block px-6 py-2 text-teal-600 hover:bg-gray-100 transition-colors duration-300 w-full text-left"
            >
              Explore Services
            </button>
          </div>
        )}
      </header>

      {/* Main content based on currentPage state */}
      {currentPage === 'home' ? (
        <HomeContent db={db} userId={userId} setCurrentPage={setCurrentPage} />
      ) : (
        <ExploreServicesPage setCurrentPage={setCurrentPage} />
      )}

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MendaMart</h3>
            <p>Connecting you with the best local artisans for your home projects.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors duration-300">How It Works</a></li>
              <li><a href="#auth-forms" className="hover:text-white transition-colors duration-300">Join</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Facebook</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Twitter</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">LinkedIn</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">TikTok</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8 text-center text-gray-500 border-t border-gray-700 pt-6">
          <p>&copy; 2024 MendaMart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
