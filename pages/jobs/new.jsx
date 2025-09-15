import React, { useState } from 'react';
import { Briefcase, DollarSign, MapPin, Edit } from 'lucide-react';

const JobCreationPage = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    serviceType: '',
    location: '',
    budget: ''
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit this data to a database
    console.log('Job Submitted:', jobDetails);
    setMessage('Your job has been submitted successfully! Artisans will be notified.');
    setJobDetails({
      title: '',
      description: '',
      serviceType: '',
      location: '',
      budget: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-6">Create a New Job</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Fill in the details for the job you need completed.</p>
        
        {message && (
          <div className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 p-4 mb-6 rounded-lg font-medium text-center transition-all duration-300 animate-fade-in">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Job Title</label>
              <div className="relative">
                <Briefcase size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={jobDetails.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Leaking Faucet Repair"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
              <div className="relative">
                <Edit size={20} className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  id="description"
                  name="description"
                  value={jobDetails.description}
                  onChange={handleInputChange}
                  placeholder="Provide details about the job, including materials, issues, and specific needs."
                  rows="4"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                ></textarea>
              </div>
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service Type</label>
              <div className="relative">
                <Briefcase size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  id="serviceType"
                  name="serviceType"
                  value={jobDetails.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors appearance-none"
                >
                  <option value="" disabled>Select a service type</option>
                  <option value="Woodwork">Woodwork</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical Work">Electrical Work</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
              <div className="relative">
                <MapPin size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={jobDetails.location}
                  onChange={handleInputChange}
                  placeholder="e.g., Nairobi, Kenya"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Budget</label>
              <div className="relative">
                <DollarSign size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  value={jobDetails.budget}
                  onChange={handleInputChange}
                  placeholder="e.g., 5000"
                  required
                  min="0"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobCreationPage;
