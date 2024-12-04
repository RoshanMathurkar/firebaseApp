# React + Vite

# Firebase.com

- Go to console
- create project
- create runtime database
- and connect with the react app

  - example code:

    - import { initializeApp } from "firebase/app";

      const firebaseConfig = {
      apiKey: "apikey",
      authDomain: "xyz",
      projectId: "xyz",
      storageBucket: "xyz",
      messagingSenderId: "xyz",
      appId: "xyz",
      databaseURL: "xyz",
      };

    export const app = initializeApp(firebaseConfig);

    - databaseurl will be generated while creating runtime database which you can use in firebase config.

- build
- authentication - get started
- email/password
