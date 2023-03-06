// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCMaAYjLe4-vHxHrNCtW4KO30SLBxXIbQI",
    authDomain: "react-netflix-clone-36fb3.firebaseapp.com",
    projectId: "react-netflix-clone-36fb3",
    storageBucket: "react-netflix-clone-36fb3.appspot.com",
    messagingSenderId: "40887189103",
    appId: "1:40887189103:web:edb80c422f20b0a84c979a",
    measurementId: "G-M39LER5CXE"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);