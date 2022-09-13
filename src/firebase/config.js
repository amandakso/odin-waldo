import firebase from "firebase/compat/app";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";


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
const db = getFirestore(app);

async function getDatabaseAnswers(pokemon) {
  const docRef = doc(db, "level1", "answers");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    switch(pokemon) {
      case "pikachu":
        return docSnap.data().coordinates1;
      case "munchlax":
        return docSnap.data().coordinates2;
      case "espeon":
          return docSnap.data().coordinates3;
      default:
        return 0;
    }
  } else {
    // doc.data() will be undefined in this case
    return 1;
  }
}

export { getDatabaseAnswers };
