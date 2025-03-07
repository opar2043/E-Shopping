import { useEffect, useState } from "react"
import useAxios from "./useAxios"


const useProducts = () => {
    const axiosSecure = useAxios()
     const [products , setProducts] = useState([]);
     useEffect(()=>{
      fetch('https://e-shoping-server-b3etp8xq2-opar2043s-projects.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
     },[])

     return [products]
}

export default useProducts