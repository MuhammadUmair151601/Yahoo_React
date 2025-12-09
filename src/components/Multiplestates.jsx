import React, { useState } from 'react'

const Multiplestates = () => {
  const [name, setname] = useState("Ali")
  const [age, setage] = useState(18)
  const changeName = ()=>{
    setname("Ali Khan")
  }
  const changeAge = ()=>{
    setage(age+1)
  }
  return (
    <div>
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeAge}>Change Age</button>
    </div>
  )
}

export default Multiplestates