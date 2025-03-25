import React, { useEffect, useState } from 'react'
import useAxios from './useAxios'
import { useQuery } from '@tanstack/react-query';

const useReview = () => {
  //  const [review , setReview] = useState([])
  //  useEffect(()=>{

  //   fetch('https://new-shoping-kappa.vercel.app/reviews')
  //   .then(res => res.json())
  //   .then(data => {
  //     setReview(data)
  //   })
  //  },[])

  //  console.log(review);
  //  return [review]


  const axiosSecure = useAxios();
  const {data : review = [] , refetch , isLoading} = useQuery({
    queryKey: ['review'],
    queryFn: async ()=> {
      const res = await axiosSecure.get('/reviews');
      return res.data
    }
  });
   return [review , refetch , isLoading]

}

export default useReview