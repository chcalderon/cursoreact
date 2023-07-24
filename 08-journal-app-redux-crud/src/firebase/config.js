import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwx5jxNJu5D5c_aEcriEMK7HYUjQCbCgc",
  authDomain: "react-cursos-98756.firebaseapp.com",
  projectId: "react-cursos-98756",
  storageBucket: "react-cursos-98756.appspot.com",
  messagingSenderId: "837082979149",
  appId: "1:837082979149:web:eaa93d97585930e186f504"
};

// Initialize Firebase
export const FireBaseApp  = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( FireBaseApp );
export const FireBaseDB   = getFirestore( FireBaseApp );