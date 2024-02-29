import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd19Lqud8jJq69ESl3tway_jNdnv5tdvg",
  authDomain: "winenot-c8f30.firebaseapp.com",
  projectId: "winenot-c8f30",
  storageBucket: "winenot-c8f30.appspot.com",
  messagingSenderId: "358391065882",
  appId: "1:358391065882:web:9405e0a01c47256b4090a3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db }; 