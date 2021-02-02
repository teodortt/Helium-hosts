import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { manualLogin, handleLogin } from '../components/Auth/Authentication';

const Login = () => {
	const [logged, setLogged] = useState(false);
	// const history = useHistory();
	const [form, setForm] = useState({
		wallet: '',
		password: ''
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		await manualLogin(form);
		setLogged(true);
		// if(login(form)){history.push("/private");}
	};

	return (
		<div>
			<Head>
			<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
			<title>Helium Hosts Login</title>
			</Head>
			
			<img width={'100px'} src="https://www.helium.bg/wp-content/uploads/ct-logos/logo_c87d22da853d6ccfcb2a89b1548ec250_1x.png" alt="Logo"/>
			<h3 className="pt-3">Helium Hosts Login</h3>

			<p className="pt-3">Private and secure communication between Helium hotspot hosts. You don’t need to provide
				any personal information to add your hotspots and begin chatting with other hosts in your area.<br></br>
				If you have already created an account, please login below. Otherwise, you can sign up by
				creating an account below.<br></br>
				Keep in mind, all communication between hosts is done via Telegram and Discord.
				</p>

			{/* {!logged ? */}
				<form onSubmit={handleSubmit} className="form-group col-sm-4 pb-5 pt-1" style={{ margin: '0 auto' }}>
					<label htmlFor="wallet">Wallet</label>
					<input type="text" className="form-control"
						placeholder="Wallet ID" id="wallet"
						onChange={(e) => setForm({ ...form, wallet: e.target.value })} />
					<br />
					<label htmlFor="password">Password</label>
					<input type="password" placeholder="Password"
						className="form-control"
						onChange={(e) => setForm({ ...form, password: e.target.value })} />
					<br />
					<button type="submit" className="btn btn-primary">Submit</button>
				</form> 

				<div style={{paddingBottom:'50px'}}>
				<button className="btn btn-success mb-3" onClick={handleLogin}>Sign in with Gmail</button>
				<p><b>OR</b></p>
				<Link className="nav-link" href="/register"><a><b>Create new account</b></a></Link>
				</div>

		</div>

	);
};
export default Login;