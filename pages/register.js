import React, { useState } from 'react';
import { manualRegister } from '../components/Auth/Authentication';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { db, firebase } from '../components/firebase';
import Form from './form';
import Home from './index';

const Register = () => {
	const router = useRouter();
	const[ user, setUser] = useState();
	const[filled, redirecttoForm] = useState(false);
	const [form, setForm] = useState({
		wallet: '',
		password: '',
		telegram:'',
		discord:'',
	});

	authorization();
	function authorization(){
	  firebase.auth().onAuthStateChanged((user) => {
		if(user){
		  setUser(user);
		//   validateUser(user);
		} else {
		  setUser(null);
		}
	  })
	};  

	const handleSubmit = (e) => {
		e.preventDefault();

		if(e.target.elements[1].value.length < 6){
		document.getElementById('password-validation').innerText = "Your password must to be at least 6 characters!";
		}
		if(e.target.elements[2].value.length < 1 && e.target.elements[3].value.length < 1){
			document.getElementById('socials-validation').innerText = "You have to add at least one social account!";
		}
		else{
		document.getElementById('password-validation').innerText = "";

		var nummers = db.collection("channels").doc("general").collection('messages').where('wallet', '==', form.wallet);
		nummers.get().then((querySnapshot) => {
			if (!querySnapshot.empty) {
			  querySnapshot.forEach(function (doc) {
			  document.getElementById('wallet-validation').innerText = "This wallet ID already exists in our database!";
			  });
			} else {
			  document.getElementById('wallet-validation').innerText = "";
			  e.preventDefault();
			  manualRegister(form);
			  redirecttoForm(true);
			}
		  });
		}
	};

	return (
		<div>
		{(filled && user) && <Home/>}
		{(filled && !user) && <Form/>}

		{!filled && (<div className="col-md-6 mx-auto text-center mt-5">
				<Head>
					<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
				</Head>
			<h1>Register</h1>
			<form onSubmit={handleSubmit} className="form-group col-md-6 mx-auto text-center">
				<label htmlFor="wallet">Wallet</label>
				<input type="text" className="form-control"
					placeholder="Wallet ID" id="wallet"
					onChange={(e) => setForm({ ...form, wallet: e.target.value })} />
					<small className="form-text text-muted">This is public, available at
					explorer.helium.com
					</small>
				<br />
				<b id="wallet-validation" style={{color:'#ff0000'}}></b>
				<br></br>
				<label htmlFor="password">Password:</label>
				<input type="password" placeholder="Password"
					className="form-control"
					onChange={(e) => setForm({ ...form, password: e.target.value })} />
				<small className="form-text text-muted">Note: Do NOT use your official Helium
				password here!
				</small>
				<br />
				<b id="password-validation" style={{color:'#ff0000'}}></b>

				<br />
				<label htmlFor="telegram">Telegram:</label>
				<div className="socialf">
				<br></br>
				<small>t.me/</small>
				<input type="text" placeholder="Telegram"
					className="rounded"
					onChange={(e) => setForm({ ...form, telegram: e.target.value })} />
				<small className="form-text text-muted">Input telegram user to be able to chat!
				</small>
				<br />
				</div>
				<label htmlFor="discord">Discord:</label>
				<div className="socialf">
				<br></br>
				<small style={{marginLeft:'-70px'}}>discord.com/users/</small>
				<input type="text" placeholder="Discord"
					className="rounded"
					onChange={(e) => setForm({ ...form, discord: e.target.value })} />
				<br />
				<b id="socials-validation" style={{color:'#ff0000'}}></b>
				</div>
				<button type="submit" id="submit" className="btn btn-primary mt-3">
					Submit
			  </button>
			</form>
		</div>)
	}</div>
	);
};
export default Register;

// function validateUser(user){
// 	var nummers = db.collection("channels").doc("general").collection('messages').where('email', '==', user.email);
// 	nummers.get().then((querySnapshot) => {
// 		if (!querySnapshot.empty) {
// 		  querySnapshot.forEach(function (doc) {
// 			console.log('exists');
// 		});
// 		} else {
// 		  console.log('not exists')
// 		  console.log(user.email)
// 		}
// 	  });
// }