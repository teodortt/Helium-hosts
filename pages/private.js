import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { firebase, db } from '../components/firebase';
import Head from 'next/head';
import Login from './login';

const PrivateRoute = () => {
    const [ user, setUser ] = useState(false);
    const [ data, setData ] = useState([]);
    const [ showform, setShowform ] = useState(false);

    function authorization(){
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          setUser(user);
          profileID(user);
        } else {
          setUser(null);
        }
      })
    };
    
    function profileID(user){
      var nummers = db.collection("channels").doc("general").collection('messages').where('user', '==', user.uid);
      nummers.get().then((querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(function (doc) {
          let results = doc.data();
          setData(results)
          console.log(results)
          // doc.ref.update({wallet: "bar"})
          });
        } else {
          console.log("false")
        }
      });
    }

    useEffect(() =>{
      authorization();
    },[])
    
    function Button({wallet}){
      const[state,setState] = useState(false);
      navigator.clipboard.writeText(wallet);
  
      return(
      <button className={state ? 'btn btn-success btn-sm' : 'btn btn-info btn-sm'} onClick={e=>setState(true)}>
        {state ? 'Copied to clipboard!' : 'Copy my wallet ID'}
      </button>)
    }
    function updateForm(e){
      e.preventDefault();

      var updateForm = db.collection("channels").doc("general").collection('messages').where('user', '==', user.uid);
      updateForm.get().then((querySnapshot) => {
          querySnapshot.forEach(function (doc) {
 
          doc.ref.update({
            wallet: e.target.elements[0].value,
            telegram: e.target.elements[1].value,
            discord: e.target.elements[2].value,
           }).then(
             ()=>{
              let results = doc.data();
              setData(results);
              e.target.elements[3].click();
              /* update email address */
              user.updateEmail(e.target.elements[0].value + '@gmail.com');
             }
           )
          });
      });
    }

 return(user ? 
    (<Layout>
  <div className="container text-center pt100">
            <h3>My personal information</h3>
    {data && 
      <div>
        <div className="card text-white mb-5 mt-5 mx-auto" style={{maxWidth:'50rem'}}>
          <div className="card-header">Wallet ID</div>
            <div className="card-body">
              {/* <h4 className="card-title"></h4> */}
              <p className="card-text">{data.wallet}</p>
              <Button wallet={data.wallet} />
              <div className="pt-2">{data.telegram ? <a className="link" href={`https://t.me/${data.telegram}`}><img src="https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png" style={{width:'150px', height:'50px'}}/></a> : <div style={{width:'150px', height:'50px', margin:'0 auto'}}>No Telegram account</div>}</div>
              <div className="pt-2">{data.discord ? <a className="link" href={`https://discord.gg/users/${data.discord}`}><img src="https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png" style={{width:'130px', height:'40px', marginRight:'10px'}}/></a> : <div style={{width:'130px', height:'40px', margin:'0 auto'}}>No Discord account</div>}</div>

            </div>
            <button className="btn btn-warning" onClick={() =>setShowform(!showform)}>{!showform ? 'Edit my profile' : 'Close'}</button>

          </div>
        </div>
       }

<form className={`form-group col-md-6 mx-auto text-center ${!showform ? 'updForm' : ''}`} onSubmit={updateForm}>
        <label>Wallet:</label>
        <input className="form-control" type="text" defaultValue={data.wallet} />

        <label>Telegram:</label>
        <input className="form-control" type="text" defaultValue={data.telegram} />

        <label>Discord:</label>
        <input className="form-control" type="text" defaultValue={data.discord} />

        <input className="btn btn-success mt-3" type="submit" id="sbm" value="Update" />
</form>

     </div>
    </Layout>) : ( 
    <div>
        <Head>
          <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
        </Head>
          <div className="App container pt-3 pb-3">
           <h1>Helium</h1>
            <Login/>
            <br></br>
           </div>
        </div>)
    )
}
export default PrivateRoute;