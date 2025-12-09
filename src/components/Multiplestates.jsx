// import React, { useState } from 'react'

// const Multiplestates = () => {
//   const [name, setname] = useState("Ali")
//   const [age, setage] = useState(18)
//   const changeName = ()=>{
//     setname("Ali Khan")
//   }
//   const changeAge = ()=>{
//     setage(age+1)
//   }
//   return (
//     <div>
//       <h1>Name:{name}</h1>
//       <h2>Age:{age}</h2>
//       <button onClick={changeName}>Change Name</button>
//       <button onClick={changeAge}>Change Age</button>
//     </div>
//   )
// }

// export default Multiplestates

// ***************Forms in usestate 
import React, { useState } from 'react'

const Multiplestates = () => {
  const [name, setname] = useState("")
  return (
    <div>
      <input type="text" value={name} onChange={(e)=> setname(e.target.value)}/>
      <p>Hello, {name}</p>
    </div>
  )
}

export default Multiplestates