import React from 'react';
import { useRouter } from 'next/router';
import { useSessionContext } from '@supabase/auth-helpers-react';

export default function ProfilePage() {
  const { isLoading, session } = useSessionContext();
  const router = useRouter();

  // If the session is loading, show a simple loading message
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading profile...</p>
      </div>
    );
  }

  // If there's no active session, redirect to the login page
  if (!session) {
    router.push('/auth/login');
    return null; // Return null to prevent rendering the page content
  }

  // Destructure user details from the session
  const user = session.user;

  return (
    <div className="bg-gray-100 min-h-screen p-8 sm:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 border-b-2 pb-4">
          My Profile
        </h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          {/* Placeholder for a user profile picture or avatar */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl font-bold">
            {user.email?.[0].toUpperCase() || '?'}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 break-words mb-2">
              {user.email}
            </h2>
            <p className="text-gray-500 font-medium">
              User ID: <span className="text-sm font-mono break-all">{user.id}</span>
            </p>
          </div>
        </div>

        {/* Placeholder for additional user information or services */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Account Details
          </h3>
          <ul className="text-gray-600 space-y-3">
            <li className="flex items-center">
              <span className="font-semibold w-32">Email:</span>
              <span>{user.email}</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-32">Last Sign In:</span>
              <span>{new Date(user.last_sign_in_at).toLocaleDateString()}</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-32">Joined:</span>
              <span>{new Date(user.created_at).toLocaleDateString()}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
