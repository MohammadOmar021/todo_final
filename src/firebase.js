
import { initializeApp } from "firebase/app";
import { getAuth   } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyCSkzRVS_lZePINx7H3F6X8qpsvaU1QPvk",
  authDomain: "todoreactfirebase-324d6.firebaseapp.com",
  projectId: "todoreactfirebase-324d6",
  storageBucket: "todoreactfirebase-324d6.firebasestorage.app",
  messagingSenderId: "1097918125667",
  appId: "1:1097918125667:web:3d2bd285e4f43f2c5b4a56"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export{
    app,
    auth
}