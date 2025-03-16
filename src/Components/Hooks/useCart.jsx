import React, { useEffect, useState } from 'react'

const useCart = () => {
     const [cart , setCart] = useState([]);
     useEffect(()=>{
      fetch('https://e-shoping-server.vercel.app/carts')
      .then(res => res.json())
      .then(data => {
        setCart(data)
      })
     },[])
     return [cart]
}

export default useCart