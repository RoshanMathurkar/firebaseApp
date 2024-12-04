import { useState } from "react";
import "./App.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "users/"), {
      id: 1,
      name: "Roshan Matt",
      age: 26,
    });
  };
  return (
    <>
      <h1>Firebase App</h1>
      <button onClick={putData}>Put Data</button>
    </>
  );
}

export default App;
