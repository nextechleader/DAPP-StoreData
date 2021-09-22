import React, {Fragment, useState} from 'react';

function NewData(createData){
  const [data, setData]= useState(undefined);

  const handleInputChange = (event) =>{
    setData({...data,[event.target.name]:event.target.value })
  }

  const enviar = (event) =>{
    event.preventDefault()
    createData.createData(data);
    event.target.reset()
    setInterval(() => {
    window.location.reload();
  }, 5000);
  }

return(
  <Fragment>
  <h2> Introducir nuevo valor</h2>
  <form onSubmit={enviar}>
  <input
  name="data"
  type="text"
  onChange={handleInputChange}
  />
  <button type="submit">Submit</button>
  </form>

  </Fragment>
);


}

export default NewData;
