import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { auth } from "../firebase";


const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Signin Success"))
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signIn-page">
      <h1>SingIn Page</h1>
      <label>Enter Your Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email"
      />
      <label>Enter Your password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your passwors"
      />
      <button onClick={singInUser}>SignIn</button>
    </div>
  );
};

export default SignInPage;
