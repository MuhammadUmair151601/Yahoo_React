import React, { useState } from 'react'

const SimpleForm = () => {

  const [name, setname] = useState("")
  const [Email, setEmail] = useState("")

  const submithandler = (e) => {
    e.preventDefault();
    console.log("name :", name);
    console.log("Email:",Email)
  }

  return (
    <div>
      <form onSubmit={submithandler}>

        <h1>React simple form:</h1>

        <label>name</label>
        <input type="text" placeholder='Username' 
        value={name}
        onChange={(e)=> setname(e.target.value)} />

        <label>Email</label>
        <input type="Email" placeholder='Email'
        value={Email} 
        onChange={(e)=> setEmail(e.target.value)}/>

        <button>submit</button>
      </form>
    </div>
  )
}

export default SimpleForm