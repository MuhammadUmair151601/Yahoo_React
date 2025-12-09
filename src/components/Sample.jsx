// import React from 'react'

// const Sample = () => {
//   const age = true;
//   let message;
//    if (age){
//         message = <h1>You are 18 years old:</h1>
//       }else{
//         message = <h1>You are not 18 years old:</h1>
//       }
    
//   return ( 
//     <div>
//       {message}
//     </div> 
//   )
// }

// export default Sample

// now using ternary operator for condition:
// import React from 'react'

// const Sample = () => {
//   let login = false;
//   return (
//     <div>
//       {login ? <h1>Welcome user</h1>: <h1>Please login</h1>}
//     </div>
//   )
// }

// export default Sample

// Using logical operatior in conditional rendering:
// import React from 'react'

// const Sample = () => {
//   let user = true;
//   return (
//     <div>
//       {user && <h1>Welcome to the user</h1>}
//     </div>
//   )
// }

// export default Sample

// import React from 'react'
// import '../App.css'

// let isvisible = false;

// const Sample = () => {
//   return (
//     <div>
//       <h1>Conditional rendering</h1>
//       <p className={isvisible ? "visible" : "invisible"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laborum rem quaerat laboriosam quibusdam maxime vel? Perferendis ab ipsam temporibus.</p>
//     </div>
//   )
// }

// export default Sample


// ********************Props in react js:
import React from 'react'

const Sample = ({name,age,city,contact}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{city}</h3>
      <p>{contact.email}<br></br>{contact.phone}</p>
    </div>
  )
}

export default Sample