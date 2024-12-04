// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APP_ID,
//     measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsVhku2-vtQtQ-i9tumP6csVFRBa9HzxU", // Directly hardcoded
  authDomain: "flightfare-c8d25.firebaseapp.com",
  projectId: "flightfare-c8d25",
  storageBucket: "flightfare-c8d25.firebasestorage.app",
  messagingSenderId: "713604115844",
  appId: "1:713604115844:web:5acfb1fb7e5c4d1b80c1d1",
  measurementId: "G-63TPEDTRB8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
