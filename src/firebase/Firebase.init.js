// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvUM5VRlRFoj1cA67HOaoVgaa15-IE3Ps",
  authDomain: "service-sharing-app.firebaseapp.com",
  projectId: "service-sharing-app",
  storageBucket: "service-sharing-app.firebasestorage.app",
  messagingSenderId: "756775653837",
  appId: "1:756775653837:web:c6f411d55b78172135f484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);