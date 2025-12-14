// // src/firebase.js
// import { initializeApp } from "firebase/app";

// // Your web app's Firebase configuration
// // (Ideally, use Environment Variables here, see Section 2)
// const firebaseConfig = {
//   apiKey: "AIzaSyD7stT7Lio1bZbGT0Tw5tfppggQ99JTNnM",
//   authDomain: "portfolio-9a7d6.firebaseapp.com",
//   projectId: "portfolio-9a7d6",
//   storageBucket: "portfolio-9a7d6.firebasestorage.app",
//   messagingSenderId: "172636943620",
//   appId: "1:172636943620:web:2daed27c451c4dcaae0c51"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export the app (or specific services) to use them in components
// export default app;



// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"; 
// // import { getAuth } from "firebase/auth"; // Agar future me login chahiye to isse uncomment karna

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Database
// const db = getFirestore(app);

// // Export app and db to use elsewhere
// export { app, db };




// src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   // Yahan apni asli values paste karo (quotes "" ke andar)
//   apiKey: "AIzaSyD7stT7Lio1bZbGT0Tw5tfppggQ99JTNnM",
//   authDomain: "portfolio-9a7d6.firebaseapp.com",
//   projectId: "portfolio-9a7d6",
//   storageBucket: "portfolio-9a7d6.firebasestorage.app",
//   messagingSenderId: "172636943620",
//   appId: "1:172636943620:web:2daed27c451c4dcaae0c51"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { app, db };



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

console.log("API KEY 👉", import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

