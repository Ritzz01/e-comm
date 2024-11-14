import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';  // Import both functions from Firebase v9+

const firebaseConfig = {
  apiKey: "AIzaSyBTfzecpZXexOdhewvxhOsZXANPM8dT-Ak",
  authDomain: "e-comm-e06c9.firebaseapp.com",
  projectId: "e-comm-e06c9",
  storageBucket: "e-comm-e06c9.appspot.com",
  messagingSenderId: "991548634273",
  appId: "1:991548634273:web:70a2fbddf05d0de77dace0",
  measurementId: "G-8FDZLRFKCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };  // Export the necessary functions
