import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth';


const firebaseConfig = { 
  apiKey: "",
  authDomain: "",
  databaseUrl: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}; 

if (firebase.apps.length === 0) {
firebase.initializeApp(firebaseConfig); 
}

const db = firebase.firestore();

export { db, firebase };
