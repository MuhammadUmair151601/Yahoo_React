import React, { useEffect, useState } from 'react'

const Samplee = () => {
  const [count, setcount] = useState(0)
  const [name, setname] = useState("")

  // if we use re-rendering:

  // useEffect(() => {
  //   console.log("component rendered:")
  // })
 
  // if we use single render and no repetition:
  // useEffect(()=>{
  //   console.log("component rendered:")},[])

  // Now if we have two usestate variables and we have to render one or both of them:
    // useEffect(()=>{
    //   console.log("rendered:")
    // },[name])


    // If we want to target any part in HTML like title using usestate:
    // useEffect(()=>{
    //   document.title = `count: ${count}`
    //   console.log("rendered:")
    // },[count])

  return (
    
    <div>
      <h1>Count: {count}</h1>
      <p>Name is : {name}</p>
      <button onClick={()=> setcount(count+1)}>Increment</button>
    </div>
  )
}

export default Samplee