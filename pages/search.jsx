import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Star } from 'lucide-react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('');

  // Mock data for search results
  const [artisans, setArtisans] = useState([
    {
      id: 1,
      name: 'Jane Doe',
      service: 'Woodwork',
      location: 'Nairobi',
      rating: 4.8,
      reviews: 124,
      bio: 'Expert in custom furniture and intricate woodwork.',
      image: 'https://placehold.co/400x400/96b8a8/ffffff?text=JD'
    },
    {
      id: 2,
      name: 'John Smith',
      service: 'Plumbing',
      location: 'Mombasa',
      rating: 4.5,
      reviews: 89,
      bio: 'Reliable and fast plumber for all your home needs.',
      image: 'https://placehold.co/400x400/a2d2ff/ffffff?text=JS'
    },
    {
      id: 3,
      name: 'Purity Wanjiku',
      service: 'Electrical Work',
      location: 'Kisumu',
      rating: 5.0,
      reviews: 56,
      bio: 'Certified electrician, providing safe and professional service.',
      image: 'https://placehold.co/400x400/cdb4db/ffffff?text=PW'
    },
  ]);

  const filteredArtisans = artisans.filter(artisan => {
    const termMatch = artisan.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      artisan.name.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = location ? artisan.location.toLowerCase() === location.toLowerCase() : true;
    const serviceMatch = serviceType ? artisan.service.toLowerCase() === serviceType.toLowerCase() : true;

    return termMatch && locationMatch && serviceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-8">Find Your Artisan</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-1/2">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a service or artisan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
          </div>
          
          <div className="relative w-full md:w-1/4">
            <MapPin size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors appearance-none"
            >
              <option value="">All Locations</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Kisumu">Kisumu</option>
            </select>
          </div>
          
          <div className="relative w-full md:w-1/4">
            <Briefcase size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors appearance-none"
            >
              <option value="">All Services</option>
              <option value="Woodwork">Woodwork</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical Work">Electrical Work</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtisans.length > 0 ? (
            filteredArtisans.map(artisan => (
              <div key={artisan.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img src={artisan.image} alt={artisan.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{artisan.name}</h2>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{artisan.service}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{artisan.location}</span>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">{artisan.bio}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="font-semibold">{artisan.rating}</span>
                      <span className="text-xs text-gray-500">({artisan.reviews} reviews)</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-2xl font-semibold text-gray-600 dark:text-gray-400">No artisans found. Try a different search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
