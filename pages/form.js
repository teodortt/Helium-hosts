import React,{ useState } from 'react';
import { useRouter } from 'next/router';
import { db, firebase } from '../components/firebase';
import Layout from '../components/Layout';
import Tokens from '../components/Tokens';

const Form = () => {
  const [ user, setUser ] = useState(null);
  const[val, setValue] = useState('');
  const[gmail, setGmail] = useState(false);
  const[socials, setSocials] = useState({
    telegram:'',
    discord:''
  });

  const router = useRouter();

  authorization();
  function authorization(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        setUser(user);
        userGmail(user);
      } else {
        setUser(null);
        router.push('/');
      }
    })
  };

  function userGmail(user){
    var nummers = db.collection("channels").doc("general").collection('messages').where('user', '==', user.uid);
    nummers.get().then((querySnapshot) => {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(function (doc) {
        // console.log('exists');
        setGmail(false);
      });
      } else {
        // console.log('not exists')
        setGmail(true)
      }
      });
  }

  const findIt = (e) =>{
    var nummers = db.collection("channels").doc("general").collection('messages').where('wallet', '==', e);
    nummers.get().then((querySnapshot) => {
      if (!querySnapshot.empty) {

        querySnapshot.forEach(function (doc) {
        document.getElementById("submit").disabled = true;
        document.getElementById("wallet-validation").style.color = "#ff0000";
        document.getElementById('wallet-validation').innerText = "This wallet ID already exists in our database!";
        // console.log(doc.id, ' => ', doc.data());
        });
      } else {
        console.log("false")
        // setDisabled(false);
        document.getElementById('wallet-validation').innerText = "";
        document.getElementById("submit").disabled = false;

      }
    });
  }

  function search(e){
    setValue(e);
    findIt(e);
  }

  function submitData(e){
    e.preventDefault();
    if(e.target.elements[1].value.length < 1 && e.target.elements[2].value.length < 1){
      alert('Please add at least one social account!');
    } else {

      const walletID = e.target.elements[0].value;
      const telegram = e.target.elements[1].value;
      const discord = e.target.elements[2].value;

      db.collection('channels')
        .doc('general')
        .collection('messages')
        .add({
          wallet: walletID,
          telegram: telegram,
          discord: discord,
          user: user.uid,
          date: new Date(),
        });
          e.target.reset();
          router.push('/');
          }
        }


  return gmail ? (
    <Layout>
    <div className="col-md-6 mx-auto text-center pt100">
      <h3>Submit your Helium account info</h3>
      <p>Please add at least one social account.</p>
      
      {user.uid && <form
        onSubmit={submitData}
        className="mt-5 p-2">
        <input onChange={e=>search(e.target.value)} value={val} className="form-control mb-3" id="token" placeholder="Wallet ID" />
        <b id="wallet-validation"></b>

        <input onChange={(e)=>setSocials({telegram: e.target.value, discord:socials.discord})} value={socials.telegram} className="form-control mb-3" id="telegram" placeholder="Telegram" />
        <input onChange={(e)=>setSocials({telegram: socials.telegram, discord: e.target.value})} value={socials.discord} className="form-control mb-3" id="discord" placeholder="Discord" />

        <p>
          <a className="link" target="_blank" rel="noreferrer" href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-">Where to find my id</a>
        </p>

        <button id="submit" className="btn btn-success" type="submit">Submit</button>
      </form>}

    </div>
     </Layout>
  ) : (
    <div>
      <Layout>
        <div className="container-fluid text-center">
        <h3>Wallets information</h3>
        <Tokens/>

        </div>
        {/* <h3 className="text-center" style={{paddingTop:'150px'}}>Your helium profile is already sumbitted!</h3> */}
      </Layout>
    </div>
  );
};
export default Form;
