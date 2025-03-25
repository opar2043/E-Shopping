import { useEffect, useState } from "react"
import useAxios from "./useAxios"
import { useQuery } from "@tanstack/react-query"


const useProducts = () => {
    const axiosSecure = useAxios()
    //  const [products , setProducts] = useState([]);
    //  useEffect(()=>{
    //   fetch('https://new-shoping-kappa.vercel.app/products')
    //   .then(res => res.json())
    //   .then(data => {
    //     setProducts(data)
    //   })
    //  },[])

    //  return [products]


    const {data : products =[] , refetch , isLoading} = useQuery({
      queryKey: ['products'],
      queryFn : async ()=> {
        const res = await axiosSecure.get('/products');
        return res.data
      }
    })

    return [products , refetch , isLoading]
}

export default useProducts