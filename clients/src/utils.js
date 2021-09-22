import Web3 from 'web3';
import StoreData from './contracts/StoreData.json'


////CONEXION WEB3/////
const getWeb3 = ()=>{
  return new Promise((resolve, reject) =>{
    window.addEventListener('load', async ()=>{
      if(window.ethereum){
        const web3 = new Web3(window.ethereum);
        try{
          await window.ethereum.request({method:'eth_accounts'});
          resolve(web3);
        }catch(error){
          reject(error);
        }
      }else if(window.web3){
        resolve(window.web3);
      }else{
        reject('Must install Metamask');
      }
    });
  });
};
//////

/////CONEXION SMARTCONTRACT/////
const getStoreData = async web3=>{
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = StoreData.networks[networkId];
  return new web3.eth.Contract(
    StoreData.abi,
    deployedNetwork && deployedNetwork.address
  );
};
//////


export {getWeb3, getStoreData};
