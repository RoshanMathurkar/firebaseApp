import { useState } from "react";
import "./App.css";
import { app, auth } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SignupPage from "./pages/Signup";
import SignInPage from "./pages/Signin";

// const auth = getAuth();

function App() {
  const signUpUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "roshan@gmail.com",
      "roshan@0798"
    ).then((value) => console.log(value));
  };
  return (
    <>
      <h1>Firebase App</h1>
      {/* <button onClick={signUpUser}>Create user</button> */}
      <SignupPage />
      <SignInPage />
    </>
  );
}

export default App;
