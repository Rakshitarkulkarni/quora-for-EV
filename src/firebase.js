import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmH1ErXh2-1wK_eTTRUqTWlhPCLLGwfKo",
  authDomain: "quora-clone-c3a90.firebaseapp.com",
  projectId: "quora-clone-c3a90",
  storageBucket: "quora-clone-c3a90.appspot.com",
  messagingSenderId: "541984107689",
  appId: "1:541984107689:web:fa06272180964b86cd4db8",
  measurementId: "G-WKSHRNJNXY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export {auth, provider};
export default db;