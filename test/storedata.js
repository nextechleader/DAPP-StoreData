const StoreData = artifacts.require('StoreData');

contract('StoreData',()=>{
 it('Tendria que salir el dato variable', async () =>{
   const storeData = await StoreData.deployed();
   await storeData.set('Nextechleaders');
   const result = await storeData.get();
   assert(result === 'Nextechleaders');
 });
});
