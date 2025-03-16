import React, { useEffect, useState } from 'react'

const useReview = () => {
   const [review , setReview] = useState([])
   useEffect(()=>{
    fetch('https://e-shoping-server-306tpqk78-opar2043s-projects.vercel.app/reviews')
    .then(res => res.json())
    .then(data => {
      setReview(data)
    })
   },[])

   console.log(review);
   return [review]

}

export default useReview