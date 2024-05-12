// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore';

// const apiKey = import.meta.env.VITE_GOOGLE_KEY;
// const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
// const projectId = import.meta.env.VITE_PROJECT_ID;
// const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
// const senderId = import.meta.env.VITE_SENDER_ID;
// const appId = import.meta.env.VITE_APP_ID;
// const measurementId = import.meta.env.VITE_MEASUREMENT_ID;
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: apiKey,
//   authDomain: authDomain,
//   projectId: projectId,
//   storageBucket: storageBucket,
//   messagingSenderId: senderId,
//   appId: appId,
//   measurementId: measurementId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
// const googleProvider = new GoogleAuthProvider();

// export const auth =  getAuth(app);
// export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);