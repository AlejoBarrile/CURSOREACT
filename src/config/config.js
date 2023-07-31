
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB-Hsx8myD0h3r3zNs8gp41g2E0rmwa0sU",
  authDomain: "infame-clothes.firebaseapp.com",
  projectId: "infame-clothes",
  storageBucket: "infame-clothes.appspot.com",
  messagingSenderId: "1061635185038",
  appId: "1:1061635185038:web:e552956eca8d1e5c916cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)