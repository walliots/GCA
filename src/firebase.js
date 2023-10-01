// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbQQ1r2_X8bCtEl88NkBoRLXDlp0bQrTo",
  authDomain: "fir-auth-808b6.firebaseapp.com",
  projectId: "fir-auth-808b6",
  storageBucket: "fir-auth-808b6.appspot.com",
  messagingSenderId: "260226408310",
  appId: "1:260226408310:web:871139b93e463f3449e457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};
