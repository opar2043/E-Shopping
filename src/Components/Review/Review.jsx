import React, { useEffect, useState } from "react";
import useReview from "../Hooks/useReview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Title from "../Shared/Title";

const Review = () => {
  // const [review] = useReview([]);
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("product.jsx")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  console.log(review);

  return (
<div className="mt-5 md:mt-24">
    <Title head={'Our Customers'} head2={'Review'}></Title>
<div className="md:w-3/4 w-full mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {review &&
          review.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 text-center my-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 mx-auto rounded-full border-2 border-indigo-500"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-800 mb-2">
                <span className="px-2 py-1 text-xs bg-slate-800 rounded-full text-white">{idx + 1}</span> {item.name}
              </h3>
              <div className="w-40 mx-auto">
                <Rating
                  value={item.rating}
                  edit={false}
                  size={2}
                  activeColor="#ffd700"
                />
              </div>
              <p className="mt-3 text-gray-600 text-sm">{item.review}</p>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
</div>
  );
};

export default Review;
