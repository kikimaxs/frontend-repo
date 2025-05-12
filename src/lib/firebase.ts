import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIGeBIe-Z9Rt23eeMAhN5a3BA8zc8jPas",
  authDomain: "ebuddyauth.firebaseapp.com",
  projectId: "ebuddyauth",
  storageBucket: "ebuddyauth.firebasestorage.app",
  messagingSenderId: "947345200441",
  appId: "1:947345200441:web:283338b01bd9a6252b44e8",
  measurementId: "G-M1KFC30VS2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
