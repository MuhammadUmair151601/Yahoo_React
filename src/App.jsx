// ********************************CSS styling in react JS

// import React from 'react'
// import "./App.css"
// import "./index.css"
// const App = () => {
//   // const headingStyle = {
//   //   color : "green",
//   //   fontSize : "23px"

//   // }
//   return (
//     <div>
//       <h1 style={{height:"40px",color:"green"}}>hello everyone</h1>
      
//     </div>
//   )
// }

// export default App


// ***************************Events and functions
// import React from 'react'

// const App = () => {
//   const onText = () => console.log("mouse on text")
//   const double = () => console.log("mouse double clicked")
//   const handlerInput = (event) =>{
//      console.clear();
//     console.log("value:", event.target.value);
//   }
//   return (
    
//     <div>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, perferendis? At reiciendis iusto repellat voluptatem provident? Molestiae autem ut accusamus quis atque laboriosam ab, nisi vel, nam sunt provident asperiores inventore fuga voluptatem totam.</p>
//       <button onMouseOver={onText} onDoubleClick={double}>sample button</button>
//       <input type="text" placeholder='typesomething' onChange={handlerInput}/>
//     </div>
//   )
// }

// export default App


// **************************Map method using array and objects

// import React from 'react'

// const App = () => {
//   const students = ["ali","ahmed","kamran","taimoor"]
//   return (
//     <div>
//       {students.map((student,index)=>{
//         return <li key={index}>{index}::{student}</li>
//       })}
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   let obj = {name:"m.umair",age:23,city:"pesh"}
//   return (
//     <div>
//      <h1>{obj.name}</h1>
//     </div>
//   )
// }

// export default App

// ******************array of objects used in map method:

// import React from 'react'

// const App = () => {
//   const arr = [
//     {name:"ali", age:23, city: "peshawar" },
//     {name:"adnan", age:23, city: "peshawar" },
//     {name:"luqman", age:23, city: "peshawar" },
//     {name:"shayan", age:23, city: "peshawar" }
//   ]
//   return (
//     <div>
//         {arr.map((array,index)=>{
//          return <h1 key={index}>{index} The detail of {array.name} is age:{array.age} and city:{array.city}</h1>
//         })}
//     </div>
//   )
// }

// export default App

// **********************Conditional rendering:
// import React from 'react'
// import Sample from './components/Sample'

// const App = () => {
//   let arr =
//  [
//   {
//     "name": "John Doe",
//     "age": 28,
//     "city": "New York",
//     "contact": {
//       "email": "john.doe@example.com",
//       "phone": "+1-555-123-4567"
//     }
//   },
//   {
//     "name": "Sarah Williams",
//     "age": 32,
//     "city": "Los Angeles",
//     "contact": {
//       "email": "sarah.williams@example.com",
//       "phone": "+1-555-987-6543"
//     }
//   },
//   {
//     "name": "Michael Chen",
//     "age": 24,
//     "city": "Chicago",
//     "contact": {
//       "email": "michael.chen@example.com",
//       "phone": "+1-555-222-3344"
//     }
//   },
//   {
//     "name": "Priya Sharma",
//     "age": 29,
//     "city": "Houston",
//     "contact": {
//       "email": "priya.sharma@example.com",
//       "phone": "+1-555-778-9922"
//     }
//   },
//   {
//     "name": "David Kim",
//     "age": 35,
//     "city": "San Francisco",
//     "contact": {
//       "email": "david.kim@example.com",
//       "phone": "+1-555-443-8899"
//     }
//   }
// ]

//   return (
//     <div>
//       {arr.map((elem,index)=>{
//         return <Sample key={index} 
//         name = {elem.name}
//         age = {elem.age}
//         city = {elem.city}
//         contact = {elem.contact}/>
//       })}
      
//     </div>
//   )
// }

// export default App


// ***********************State management
// props are immutable for that state management are introduced:
// import React, { useState } from 'react'

// const App = () => {
//   const [count, setcount] = useState(0)

//   const increase = ()=>{
//     setcount(count+1)
//   }

//   const decrease = ()=>{
//     setcount(count-1)
//   }

//   const reset = ()=>{
//     setcount(0)
//   }
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default App
// ********************creating a button getting liked after clicking:

import React from 'react'
import Like from './components/Like'
const App = () => {
  return (
    <div>
      <Like/>
    </div>
  )
}

export default App