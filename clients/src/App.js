import React, { useEffect, useState} from 'react';
import {getWeb3, getStoreData} from './utils.js';
import NewData from './newdata.js';

function App() {

  ////HOOKS///
  const [web3, setWeb3]= useState(undefined);
  const [accounts, setAccounts]= useState(undefined);
  const [storedata, setStoreData]=useState(undefined);
  const [newdata, setNewData]=useState([]);

  useEffect(()=>{
    const init = async ()=>{
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const storedata = await getStoreData(web3);
      const newdata =  await storedata.methods.get().call();
      setWeb3(web3);
      setAccounts(accounts);
      setStoreData(storedata);
      setNewData(newdata);
    };
    init();
  },[]);
/////////



const createData = data =>{
    storedata.methods.set(data.data).send({from: accounts[0]})
}

function handleSubmit(e) {
  e.preventDefault();
  window.location.reload()
}


////VARIABLES NO DEFINIDAS////
if(
  typeof web3==='undefined'
  || typeof accounts==='undefined'
  || typeof storedata==='undefined'

){
  ///PAGINA SI VARIABLES NO DEFINIDAS
  return(
  <div>
  <p> Loading ... </p>
  </div>
);
}



/////PAGINA/////
return(
  <div>
  Cuenta : {accounts[0]}
  <NewData createData={createData}/>
  Data: {newdata}

  <form onSubmit={handleSubmit}>
    <button type="submit">Actualizar data</button>
  </form>
  </div>
);
}



export default App;
