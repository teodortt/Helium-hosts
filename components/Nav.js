import Link from 'next/link';
import "firebase/auth";
import { firebase } from '../components/firebase';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  

useEffect(() => {
  const handleResize = () => {
    if(window.innerWidth < 1200){
      setIsMobile(true)
      // console.log('true')
    } else {
      setIsMobile(false)
      // console.log('false')
    }
  }
  handleResize()
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])


    return(
   <div className="nav bg-primary">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title" role="button">
    <a href="/">
      <img width={'50px'} src="https://www.helium.bg/wp-content/uploads/ct-logos/logo_c87d22da853d6ccfcb2a89b1548ec250_1x.png" alt="Logo"/>
      </a>
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <Link href="/">Home</Link>
    <Link href="/private">My Profile</Link>
    {isMobile && <a onClick={()=>{firebase.auth().signOut()}}>Log out</a>}
  </div>
  {!isMobile && <div className="nav-right">
  <a role="button" onClick={()=>{firebase.auth().signOut()}}>Log out</a>
  </div>}
</div>
)
    }
export default Nav;