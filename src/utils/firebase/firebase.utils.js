import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRNTkkSDM5W-UAF-ncjix09MPx-xXepJk",
  authDomain: "crwn-clothing-db-cfc70.firebaseapp.com",
  projectId: "crwn-clothing-db-cfc70",
  storageBucket: "crwn-clothing-db-cfc70.appspot.com",
  messagingSenderId: "512758726055",
  appId: "1:512758726055:web:c7a9efa7096faeb004ca82",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
};
