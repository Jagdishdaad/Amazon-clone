import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9v-wriipCGYr1yXubY_LXkV0uFZqBc_s",
  authDomain: "clone-e23d4.firebaseapp.com",
  projectId: "clone-e23d4",
  storageBucket: "clone-e23d4.appspot.com",
  messagingSenderId: "933227306877",
  appId: "1:933227306877:web:1ae317a59d229b4984b614",
  measurementId: "G-HY35D20Z2V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
