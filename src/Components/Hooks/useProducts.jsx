import { useEffect, useState } from "react"
import useAxios from "./useAxios"


const useProducts = () => {
    const axiosSecure = useAxios()
     const [products , setProducts] = useState([]);
     useEffect(()=>{
      fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
     },[])

     return [products]
}

export default useProducts