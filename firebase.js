// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhDrjdrBj13-WEqSHL3iWBYvm6lRJiLvg",
  authDomain: "twitter-clone-b2aa6.firebaseapp.com",
  projectId: "twitter-clone-b2aa6",
  storageBucket: "twitter-clone-b2aa6.appspot.com",
  messagingSenderId: "746362998347",
  appId: "1:746362998347:web:77857a632ee43afeda47ce"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
