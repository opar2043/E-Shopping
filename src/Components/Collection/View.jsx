// import React from 'react'
// import { useParams } from 'react-router-dom'
// import useProducts from '../Hooks/useProducts';

// const View = () => {
//   const {id} = useParams();
//   const [products ] = useProducts([]) || []

//   const product = products.find(pro => pro._id == id);
//   console.log(product);

//   const {name , category , description , price , photo , rating , sell} = product
//   return (
//     <div>

// <a href="#" className="group relative block overflow-hidden">
//   <button
//     className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
//   >
//     <span className="sr-only">Wishlist</span>

//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className="size-4"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//       />
//     </svg>
//   </button>

//   <img
//     src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
//     alt=""
//     className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
//   />

//   <div className="relative border border-gray-100 bg-white p-6">
//     <p className="text-gray-700">
//       $49.99
//       <span className="text-gray-400 line-through">$80</span>
//     </p>

//     <h3 className="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>

//     <p className="mt-1.5 line-clamp-3 text-gray-700">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
//       Officiis qui, enim cupiditate aliquam corporis iste.
//     </p>

//     <form className="mt-4 flex gap-4">
//       <button
//         className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
//       >
//         Add to Cart
//       </button>

//       <button
//         type="button"
//         className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
//       >
//         Buy Now
//       </button>
//     </form>
//   </div>
// </a>
//     </div>
//   )
// }

// export default View

import React from "react";
import { useActionData, useParams } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const View = () => {
  const { id } = useParams();
  const [products] = useProducts([]) || [];
  const product = products.find((pro) => pro._id === id);
  const axiosSecure = useAxios()

  const {user} = useAuth();
  console.log(user , 'current user');
  if (!product) {
    return <p className="text-center text-gray-500">Product not found</p>;
  }

  const { name, category, description, price, image, rating, sell, size } =
    product;

    function addToCart(item){
      console.log(item);

      const newItem = {...item , email: user?.email}

      axiosSecure.post('/carts',newItem)
      .then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.name } added to Cart`,
          showConfirmButton: false,
          timer: 1500
        });
      })

    }


    function addedBtn(){
      toast.error('You Have To Login Before Adding')
    }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-2xl rounded-lg mt-10 transform transition-all hover:scale-105">
      <div className="relative">
        <img
          src={image || "https://i.ibb.co.com/6wsnPX0/clothes9.jpg"}
          alt={name}
          className="h-72 w-full object-cover rounded-lg transition duration-500 hover:scale-105"
        />
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
          <span className="sr-only">Wishlist</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
        <h2 className=" font-semibold text-gray-900 mt-2 ">
          Category :   
          <div className="badge badge-secondary ml-2">{category}</div>
        </h2>

        <p className="text-gray-700 mt-4">{description}</p>

        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-gray-900">${price}</span>
          <p className="flex flex-wrap gap-2 font-bold">
          <button
                  
                  className="btn-xs  bg-slate-950 text-white font-bold rounded"
                >
                 Size
                </button>
            {size &&
              size.map((sz) => (
                <button
                  key={sz}
                  className="btn-xs hover:bg-orange-600 bg-slate-950 text-white font-semibold rounded"
                >
                  {sz}
                </button>
              ))}
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="w-full bg-gray-200 text-gray-900 py-3 rounded-md transition hover:scale-105">
          <span className="text-sm text-slate-800 font-semibold">
            ⭐ {rating} | Sold: <span className=" rounded-lg">{sell || 'Average'} </span>
          </span>
        </button>
      {
        user ?      <button
        onClick={()=>addToCart(product)}
        className="w-full bg-gray-900 text-white py-3 rounded-md transition hover:scale-105">
          Add To Cart
        </button> :         <button
        onClick={addedBtn}
        className="w-full bg-gray-900 text-white py-3 rounded-md transition hover:scale-105">
          Add To Cart
        </button>
      }
      </div>
    </div>
  );
};

export default View;
