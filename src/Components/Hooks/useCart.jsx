import React, { useEffect, useState } from 'react'
import useAxios from './useAxios'
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    //  const [cart , setCart] = useState([]);
    //  useEffect(()=>{
    //   fetch('https://new-shoping-kappa.vercel.app/carts')
    //   .then(res => res.json())
    //   .then(data => {
    //     setCart(data)
    //   })
    //  },[])
    //  return [cart]

    const axiosSecure = useAxios();
    const {data : cart =[] , refetch , isLoading} = useQuery({
       queryKey: ['cart'],
       queryFn: async ()=> {
        const res = await axiosSecure.get('/carts');
        return res.data;
       }
    });
    return [cart , refetch , isLoading]
}

export default useCart
