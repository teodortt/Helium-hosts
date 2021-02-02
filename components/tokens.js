import React, { useState, useEffect } from 'react';
import { db } from './firebase';

export const Tokens = () => {
  const [ tokens, setTokens ] = useState([]);
  const [ devices, setDevices ] = useState([]);
  const [ footer, setFooter ] = useState('fixed-footer closed');
  const [ query, setQuery ] = useState('');
  const [ results, setResults ] = useState([]);


  //get hotspots
  useEffect(() =>{
    db
    .collection('channels')
    .doc('general')
    .collection('messages').orderBy('date', 'desc')
    .onSnapshot(snapshot => {
      const docs = [];
      snapshot.forEach(doc => {
        docs.push({
          ...doc.data(),
          id: doc.id
        });
      });
      // docs.sort((d1, d2) => new Date(d1.date).getTime() - new Date(d2.date).getTime()).reverse();
      // let fit = docs.filter((items, idx) => idx % 3 == 0) //1,2,3
      // console.log(docs)
      setTokens(docs);
    });
   },[]);

  function hotspots(id){
    let api = `https://api.helium.io/v1/accounts/${id}/hotspots`;
    // if (query)api  = `https://api.helium.io/v1/accounts/${query}/hotspots`;

    fetch(api)
      .then(res => res.json())
      .then((data) => {
        setDevices(data.data);
        // console.log(data.data);
      });
  }

  function searchUser(e){
    e.preventDefault();
    findIt(query);
  }

  function findIt(query){
    var nummers = db.collection("channels").doc("general").collection('messages').where('wallet', '==', query);
    nummers.get().then((querySnapshot) => {
      if (!querySnapshot.empty) {

        querySnapshot.forEach(function (doc) {
            // console.log(doc.id, ' => ', doc.data());
            setResults(doc.data());
        });
      } else {
        alert("no data")
      }
    });
  }

  function Button({wallet}){
    const[state,setState] = useState(false);
    navigator.clipboard.writeText(wallet);

    return(
    <button className={state ? 'btn btn-success btn-sm' : 'btn btn-secondary btn-sm'} onClick={e=>setState(true)}>
      {state ? 'Copied to clipboard!' : 'Copy wallet ID'}
    </button>)
  }

  return (
  <div>
  <div className="row">
  <div className="container pb-5">
  <form className="form col-md-6 mx-auto mt-5" onSubmit={searchUser}>
        <input className="form-control mr-sm-2" type="text" placeholder="Search wallet..." value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button className="btn btn-secondary my-2 ">Search</button>
      </form>
      
  </div>

  </div>
  <div className="container">
  {/* <h3>Recently added wallets</h3> */}

  {!results.wallet ?

<div className="container">
<h3>Recently added wallets</h3>

  <div className="row pt-4">
    <div className="col-sm">
{tokens.slice(0, 15).filter((items, idx) => idx % 3 == 0).map((token, index) => {
      return (
        <div key={index}>

<div className="card text-white bg-primary mb-3" style={{maxWidth:'20rem'}}>
<div className="card-header">{token.wallet.slice(0,25) + '...'}</div>
<div className="card-body">
{/* <h4 className="card-title"></h4> */}
{/* <p className="card-text">{token.wallet}</p> */}
<Button wallet={token.wallet} />
<div className="pt-2">{token.telegram ? <a className="link" target="_blank" href={`https://t.me/${token.telegram}`}><img src="https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png" style={{width:'150px', height:'50px'}}/></a> : <div style={{width:'150px', height:'50px', margin:'0 auto'}}>No Telegram account</div>}</div>
<div>{token.discord ? <a className="link" target="_blank" href={`https://discord.gg/users/${token.discord}`}><img className="mb-2" src="https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png" style={{width:'130px', height:'35px', marginRight:'10px'}}/></a> : <div className="mb-2" style={{width:'130px', height:'35px', margin:'0 auto'}}>No Discord account</div>}</div>

<button className="btn btn-info mt-2" onClick={()=>{hotspots(token.wallet); setFooter('fixed-footer');}}>show hotspots</button>
</div>
</div>

        </div>
      );
    })
  
    }    </div>
    {/* end 1 */}
    <div className="col-sm">
{tokens.slice(0, 15).filter((items, idx) => idx % 3 == 1).map((token, index) => {
      return (
        <div key={index}>
<div className="card text-white bg-primary mb-3" style={{maxWidth:'20rem'}}>
<div className="card-header">{token.wallet.slice(0,25) + '...'}</div>
<div className="card-body">
<Button wallet={token.wallet} />
<div className="pt-2">{token.telegram ? <a className="link" target="_blank" href={`https://t.me/${token.telegram}`}><img src="https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png" style={{width:'150px', height:'50px'}}/></a> : <div style={{width:'150px', height:'50px', margin:'0 auto'}}>No Telegram account</div>}</div>
<div>{token.discord ? <a className="link" target="_blank" href={`https://discord.gg/users/${token.discord}`}><img className="mb-2" src="https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png" style={{width:'130px', height:'35px', marginRight:'10px'}}/></a> : <div className="mb-2" style={{width:'130px', height:'35px', margin:'0 auto'}}>No Discord account</div>}</div>

<button className="btn btn-info mt-2" onClick={()=>{hotspots(token.wallet); setFooter('fixed-footer');}}>show hotspots</button>
</div>
</div>

        </div>
      );
    })

    }    </div>
    {/* end2 */}
    <div className="col-sm">
    {tokens.slice(0, 15).filter((items, idx) => idx % 3 == 2).map((token, index) => {
      return (
        <div key={index}>
<div className="card text-white bg-primary mb-3" style={{maxWidth:'20rem'}}>
<div className="card-header">{token.wallet.slice(0,25) + '...'}</div>
<div className="card-body">
<Button wallet={token.wallet} />
<div className="pt-2">{token.telegram ? <a className="link" target="_blank" href={`https://t.me/${token.telegram}`}><img src="https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png" style={{width:'150px', height:'50px'}}/></a> : <div style={{width:'150px', height:'50px', margin:'0 auto'}}>No Telegram account</div>}</div>
<div>{token.discord ? <a className="link" target="_blank" href={`https://discord.gg/users/${token.discord}`}><img className="mb-2" src="https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png" style={{width:'130px', height:'35px', marginRight:'10px'}}/></a> : <div className="mb-2" style={{width:'130px', height:'35px', margin:'0 auto'}}>No Discord account</div>}</div>

<button className="btn btn-info mt-2" onClick={()=>{hotspots(token.wallet); setFooter('fixed-footer');}}>show hotspots</button>
</div>
</div>

        </div>
      );
    })
  }</div>
    {/* end3 */}
    </div>
  </div> :
  // else show query results
      (
    <div className="container p-5"> 
            <h3>Results:</h3>
            <div className="card text-white bg-primary mb-3 mx-auto" style={{maxWidth:'20rem'}}>
            <div className="card-header">{results.wallet.slice(0,25) + '...'}</div>
            <div className="card-body">
            <Button wallet={results.wallet} />
            <p className="pt-2">{results.telegram ? <a className="link" target="_blank" href={`https://t.me/${results.telegram}`}><img src="https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png" style={{width:'150px', height:'50px'}}/></a> : <b style={{width:'150px', height:'50px', margin:'0 auto'}}>No Telegram account</b>}</p>
            <p className="pt-2">{results.discord ? <a className="link" target="_blank" href={`https://discord.gg/users/${results.discord}`}><img src="https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png" style={{width:'130px', height:'40px', marginRight:'10px'}}/></a> : <b style={{width:'130px', height:'40px', margin:'0 auto'}}>No Discord account</b>}</p>

            <button className="btn btn-info pt-2" onClick={()=>{hotspots(token.wallet); setFooter('fixed-footer');}}>show hotspots</button>
            </div>
            </div>

            <button className="btn btn-primary" onClick={()=>setResults([])}>Go back</button>

    </div>
      )
   }
</div>

    <div className={footer}>
    <div className="fixcont container">
    <a id="close" role="button" className="close" onClick={()=>setFooter('fixed-footer closed')}>x</a>

      <table className="table table-hover mt-5 rounded">
  <thead>
    <tr className="table-secondary">
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
  {devices.map((device, i)=>
    <tr key={i} className="table-primary">
      <th scope="row">{device.name}</th>
      <td>{device.status.online}</td>
      <td>{device.geocode.long_street}, {device.geocode.short_country}</td>
    </tr>
  )}


  </tbody>
</table>

      </div>

        <br></br>
      <button className="cls btn btn-primary mb-3" onClick={()=>setFooter('fixed-footer closed')}>Close</button>

    </div>

  </div>
  )
};

export default Tokens;

{/* <div className="col-sm">
{tokens.slice(0, 15).filter((items, idx) => idx % 3 == 1).map((token, index) => {
      return (
        <div key={index}>
          <p><b>Helium Token: </b></p>
          <p className="wallet">{token.wallet.slice(0,10) + "..."}</p>
          <Button wallet={token.wallet} />
          <p>{token.telegram ? <a className="link" href={`https://t.me/${token.telegram}`}>Telegram</a> : 'Not telegram account'}</p>
          <p>{token.discord ? <a className="link" href={`https://discord.gg/users/${token.discord}`}>Discord</a> : 'Not discord account'}</p>

          <button className="btn btn-primary" onClick={()=>{hotspots(token.wallet); setFooter('fixed-footer');}}>show hotspots</button>
          <hr></hr>

        </div>
      );
    })

    }    </div> */}

          {/* <p>{results.wallet}</p>
      <p><a href={`https://t.me/${results.telegram}`}>Telegram</a></p>
      <p><a href={`https://discord.gg/users/${results.discord}`}>Discord</a></p>
      <br></br>
      <button className="btn btn-primary" onClick={()=>{hotspots(results.wallet); setFooter('fixed-footer');}}>show hotspots</button>
       */}