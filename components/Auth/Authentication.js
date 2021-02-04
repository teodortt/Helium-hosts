import firebase from 'firebase/app'; 
import "firebase/auth";
import { db } from '../firebase';


export const manualRegister = async ({ wallet, password, telegram, discord }) => {
	await firebase.auth()
	  .createUserWithEmailAndPassword(wallet+'@gmail.com', password).then((userCredential) => {
		// Signed in 
		var user = userCredential.user;
		console.log(user);
			//custom import to db
	db.collection('channels')
	.doc('general')
	.collection('messages')
	.add({
	  wallet: wallet,
	  telegram: telegram,
	  discord: discord,
	  email: wallet + '@gmail.com',
	  user: user.uid,
	  date: new Date(),
  });
		// ...
	  })
	  .catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorMessage);
		// ..
	  });
	// return user;
  };
  
  export const manualLogin = async ({ wallet, password }) => {
	await firebase.auth()
	  .signInWithEmailAndPassword(wallet + '@gmail.com', password).then((userCredential) => {
		// Signed in
		var res = userCredential.user;
		// ...
	  })
	  .catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(error.message)
	  });
	// return res.user;
  };

  /* Google Login*/
  export const handleLogin = async () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	await firebase.auth().signInWithPopup(provider).then(
	  function (result) {
		//  var token = result.credential.accessToken;
		var user = result.user;
  
		//this is what you need
		var isNewUser = result.additionalUserInfo.isNewUser;
		if (isNewUser) {
		  //delete the created user
		  console.log('user ' + user.email + ' does not exist!');
		//   window.location = '/form';
		} else {
		  // your sign in flow
		  console.log('user ' + user.email + ' does exist!');
		  // window.location = '/tokens';
		}
	  }).catch(function (error) {
		// Handle Errors here.
	  });
	// setUser(result.user);
	// document.location.href="/form";
  };
  


