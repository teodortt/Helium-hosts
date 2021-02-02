// import { firebase } from '../firebase';

// export const handleLogin = async () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   await firebase.auth().signInWithPopup(provider).then(
//     function (result) {
//       //  var token = result.credential.accessToken;
//       var user = result.user;

//       //this is what you need
//       var isNewUser = result.additionalUserInfo.isNewUser;
//       if (isNewUser) {
//         //delete the created user
//         console.log('user ' + user.email + ' does not exist!');
//         window.location = '/form';
//       } else {
//         // your sign in flow
//         console.log('user ' + user.email + ' does exist!');
//         // window.location = '/tokens';
//       }
//     }).catch(function (error) {
//       // Handle Errors here.
//     });
//   // setUser(result.user);
//   // document.location.href="/form";
// };
