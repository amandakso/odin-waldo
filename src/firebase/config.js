import firebase from "firebase/app";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    //...
    apiKey: "AIzaSyDqtX3JMLmC4Q6WdtSsv7M_0EIg80nIjTo",
    authDomain: "pokemonwaldo-1b1eb.firebaseapp.com",
    projectId: "pokemonwaldo-1b1eb",
    storageBucket: "pokemonwaldo-1b1eb.appspot.com",
    messagingSenderId: "650907026175",
    appId: "1:650907026175:web:31377a2cd5d496387302ca"
  };

const app = firebase.initializeApp(firebaseConfig);

export default app;