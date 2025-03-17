import React, { useEffect, useState } from 'react'

const useReview = () => {
   const [review , setReview] = useState([])
   useEffect(()=>{

    fetch('https://new-shoping-kappa.vercel.app/reviews')
    .then(res => res.json())
    .then(data => {
      setReview(data)
    })
   },[])

   console.log(review);
   return [review]

}

export default useReview