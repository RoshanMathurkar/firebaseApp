import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../firebase";


const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
    setEmail("");
    setPassword("");
  };

  return (
    <div className="singuppage">
      <h1>Singup Page</h1>
      <label>Email</label>
      <br />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email."
      />
      <br />
      <label> Password</label>
      <br />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your password."
      />
      <br />
      <button onClick={createUser}>Signup</button>
    </div>
  );
};

export default SignupPage;
