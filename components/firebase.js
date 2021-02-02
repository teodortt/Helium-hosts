import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth';


const firebaseConfig = { 
  apiKey: "AIzaSyASxG9JMzdsDHIL2EDTwdFDHJdQeWWWiNs",
  authDomain: "hlm-map-c340f.firebaseapp.com",
  databaseUrl: "https://hlm-map-c340f-default-rtdb.firebaseio.com/",
  projectId: "hlm-map-c340f",
  storageBucket: "hlm-map-c340f.appspot.com",
  messagingSenderId: "937932607677",
  appId: "1:937932607677:web:90a0e27ff1ca022481a7d4"
}; 

if (firebase.apps.length === 0) {
firebase.initializeApp(firebaseConfig); 
}

const db = firebase.firestore();

export { db, firebase };
