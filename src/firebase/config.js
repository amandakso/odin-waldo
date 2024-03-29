import firebase from "firebase/compat/app";
import { getFirestore, doc, getDoc, addDoc, collection, serverTimestamp, query, limit, where, getDocs } from "firebase/firestore/lite";


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
async function addScore(name, time) {
  const docRef = await addDoc(collection(db, "level1", "scores", "users"), {
    name: name,
    date: serverTimestamp(),
    time: time,
  });
}
async function getScores() {
  let scores = [];
  const q = query(collection(db, "level1", "scores", "users"), where("time", "!=", null), limit(25));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    scores = scores.concat(doc);
  })
  return scores;
}  
/*
const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
}); */

export { getDatabaseAnswers, addScore, getScores };
