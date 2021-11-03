import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBk1K5WtWki-Q2TevxGTDfPDVNHfxTPe9M",
  authDomain: "whatsapp-clone-be544.firebaseapp.com",
  projectId: "whatsapp-clone-be544",
  storageBucket: "whatsapp-clone-be544.appspot.com",
  messagingSenderId: "632002408969",
  appId: "1:632002408969:web:5ab86863fb6beb54cc3ed8",
  measurementId: "G-Z3WFWBSFDM",
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;