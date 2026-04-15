import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5a9sww6-8r4nt9JKiQAk4oiaHCnbeYBA",
  authDomain: "soulwinning-tracker-e45b9.firebaseapp.com",
  projectId: "soulwinning-tracker-e45b9",
  storageBucket: "soulwinning-tracker-e45b9.firebasestorage.app",
  messagingSenderId: "402520733641",
  appId: "1:402520733641:web:af96ab14270f7d785b9a18"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
