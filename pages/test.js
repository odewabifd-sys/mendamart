import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export default function SupabaseTestPage() {
  const [message, setMessage] = useState('Checking Supabase connection...');

  useEffect(() => {
    async function checkConnection() {
      if (!supabase) {
        setMessage('Supabase not configured. Please check your .env.local file.');
        return;
      }

      try {
        // A simple query to test the connection. We're not expecting any data.
        const { error } = await supabase.from('test_table').select('*').limit(0);

        if (error) {
          setMessage(`Error connecting to Supabase: ${error.message}`);
        } else {
          setMessage('Successfully connected to Supabase!');
        }
      } catch (e) {
        setMessage(`An unexpected error occurred: ${e.message}`);
      }
    }

    checkConnection();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-4">Supabase Connection Test</h1>
      <p className="text-xl font-medium text-center">{message}</p>
    </div>
  );
}
