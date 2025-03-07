import React, { useEffect, useState } from 'react'

const useReview = () => {
   const [review , setReview] = useState([])
   useEffect(()=>{
    fetch('./product.jsx')

    .then(res => res.json())
    .then(data => {
      setReview(data)
    })
   },[])

   return [review]

}

export default useReview