import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const Login = ({ closeLogin }) => {
  // State to hold the username and password inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

    // Simulate a login process
    // Replace this with your actual login logic (API call)
    const isLoginSuccessful = true; // Simulate a successful login for demonstration purposes

    if (isLoginSuccessful) {
      alert('Login successful!'); // Notify the user
      closeLogin(); // Close the modal
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLogin();
      }}
    >
      <div className="bg-black bg-opacity-77 p-8 rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="relative">
          <button 
            className="absolute -top-2 -right-2 text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
            onClick={closeLogin}
          >
            <IoMdClose className="w-5 h-5" />
          </button>
          
          <h1 className="text-gray-300 text-2xl font-semibold mb-6">Login</h1>
          
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-gray-400 block mb-2">Email</label>
              <input 
                type="email" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="Enter your Email"
              />
            </div>
            
            <div>
              <label className="text-gray-400 block mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="Enter your password"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition-colors"
            >
              Login
            </button>
            
            <div className="text-center">
              <button 
                type="button"
                className="text-gray-400 hover:text-red-500 text-sm transition-colors"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

