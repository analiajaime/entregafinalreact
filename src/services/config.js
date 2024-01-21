import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDLd3isdAbbFgN-vXlNLKPIwOhd3BDtobQ",
  authDomain: "vamosdenuevo-ff321.firebaseapp.com",
  projectId: "vamosdenuevo-ff321",
  storageBucket: "vamosdenuevo-ff321.appspot.com",
  messagingSenderId: "856097943522",
  appId: "1:856097943522:web:8eb444862e54c9b88413bb"
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
