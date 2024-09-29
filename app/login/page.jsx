"use client"
import React, { useState, useEffect } from 'react';

import { useRouter } from  'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mounted, setMounted] = useState(false); // State to track if the component is mounted
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  // Function to navigate to the home page
  const navigateToHome = () => {
    if (mounted) {
      router.push('/register'); // Navigate to the home page only if mounted
    }
  };

  if (!mounted) {
    return null; // Return null until the component is mounted on the client
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>

        {/* Button to navigate to home */}
        <button
          type="button"
          onClick={navigateToHome} // Trigger navigation on click
          className="w-full bg-gray-500 text-white p-2 mt-4 rounded"
        >
          Register Now
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
