import React from 'react'
import { useState } from 'react'
const Like = () => {

  const [like, setlike] = useState(false)
  
  return (
    
    <div>
        <button onClick={()=> setlike(!like)}>
          {like ? "liked 💖" : "like ❤️"}
        </button>
    </div>
  )
}

export default Like