import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNmnCVhgynNYSrg7oyJqXD9J7QGxKEl9s",
  authDomain: "app-ea8f7.firebaseapp.com",
  projectId: "app-ea8f7",
  storageBucket: "app-ea8f7.firebasestorage.app",
  messagingSenderId: "371228363100",
  appId: "1:371228363100:web:14b541d003d4b36a4b1999",
  databaseURL: "https://app-ea8f7-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);