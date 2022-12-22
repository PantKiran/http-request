import React from 'react'
import { useState } from 'react'

const Users = () => {
  const [Id, setId] = useState();
  const [Name, setName] = useState();
  const [Age, setAge] = useState();
  const [Email, setEmail] = useState();
  const sumbit=async()=>{
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
       Id: Id,
        Name: Name,
        Age: Age,
        Email:Email
      }),
    };
    await fetch("http://localhost:3000/api/users/", requestOptions);
   
  }
  return (
    <>
     <div>
        <input onKeyUp={(e)=>setId(e.target.value)} placeholder='id' type="text" /><br /><br />
        <input onKeyUp={(e)=>setName(e.target.value)} placeholder='Name' type="text" /><br /><br />
        <input onKeyUp={(e)=>setAge(e.target.value)} placeholder='Age' type="text" /><br /><br />
        <input onKeyUp={(e)=>setEmail(e.target.value)} placeholder='Email' type="email" /><br /><br />
        <button onClick={()=>sumbit()}>sumbit</button>
    </div>
    </>
   
  )
}

export default Users