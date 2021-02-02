import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Head from 'next/head';
import "firebase/auth";
import { firebase } from '../components/firebase';

const Layout = ({children}) =>{
    
    const [ user, setUser ] = useState(null);

    //Authorization
    useEffect(() =>{
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          setUser(user);
        } else {
          setUser(null);
        }
      })
    });

    return (
<div>
    <Head>
        <title>Head</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
    </Head>
    
    <Nav />
    <div className="content">
    {children}
    </div>
    <footer>
        <div className="text-center pt-5">
          <p style={{color: '#31d66e'}}><a href="https://discord.gg/z9B4FHESk4">Join to our discord server</a></p>
          <p>Email:</p>
          <p>hello@helium.bg</p>
          </div>
    </footer>
</div>
)
}
export default Layout;