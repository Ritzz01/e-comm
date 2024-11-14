import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase'; // Import from firebase.js
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function SignIn({setUserEmail}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use navigate hook for programmatic navigation

  // Function for registering a new user
  const register = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUserEmail(email);  // Set email in App component
      console.log('User Registered:', userCredential.user); // Access the user data if needed

      // Navigate to home page after successful registration
      navigate('/home');
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  // Function for signing in an existing user
  const signIn = async (e) => {
    e.preventDefault();

    try {
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      console.log('User Signed In:', userCredential.user); // Access the user data if needed

      // Navigate to home page after successful sign in
      navigate('/home');
    } catch (error) {
      console.error('Error signing in user:', error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <fieldset className="p-6 rounded-lg bg-white shadow-md w-80">
        <legend className="text-xl font-semibold text-purple-600 text-center mb-4">
          Sign In / Register
        </legend>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm text-gray-700">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full mt-1 p-2 border rounded"
              value={email}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-sm text-gray-700">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="w-full mt-1 p-2 border rounded"
              value={password}
              required
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={register}
              type="submit"
              className="w-48 p-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Register
            </button>

            <button
              onClick={signIn}
              type="submit"
              className="w-48 p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Sign In
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default SignIn;
