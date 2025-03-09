import React, { useEffect, useState } from 'react'

const useUser = () => {
 
     const [user , setUser] = useState([]);
     useEffect(()=>{
      fetch('https://e-shoping-server.vercel.app/users')
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
     },[])

     return [user]
}

export default useUser