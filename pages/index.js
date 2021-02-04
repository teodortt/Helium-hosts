import React, { useState, useEffect } from 'react';
import "firebase/auth";
import { firebase } from '../components/firebase';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Login from './login'
import Tokens from '../components/Tokens'
import Head from 'next/head';

function Home() {
  const [ user, setUser ] = useState(null);
  const [ channels, setChannels ] = useState(null);

  //Authorization
  useEffect(() =>{
    let isMounted = true;

    const auth = firebase.auth().onAuthStateChanged((user) => {
      if(user && isMounted) {
         setUser(user);
      } else {
        setUser(null);
      }
    })
    return () => {  isMounted = false;  };
  },[]);

  // channels
  useEffect(() =>{
    const db = firebase.firestore();
   db.collection('channels').onSnapshot(snapshot => {
     const docs = [];
     snapshot.forEach(doc => {
       docs.push({
        ...doc.data(),
         id: doc.id
       });
     });
     setChannels(docs);
   });
  },[]);

  return user ? (
    <Layout>
    <div className="container-fluid text-center">
      <h3>Wallets information</h3>
      <Tokens/>
    </div>
    </Layout>
  ) : ( 
      <div>
        <Head>
          <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
          <title>Helium app</title>
        </Head>
          <div className="App container pt-5">
            <Login/>
           </div>
        </div>
  );
}
export default Home;