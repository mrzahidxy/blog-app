import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDStZ-Oxlwi9KMnTjJQyYOpM3FjZwYgJBY",
  authDomain: "blog-app-becc4.firebaseapp.com",
  projectId: "blog-app-becc4",
  storageBucket: "blog-app-becc4.appspot.com",
  messagingSenderId: "126392910954",
  appId: "1:126392910954:web:410889d349f102a9af3613"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}