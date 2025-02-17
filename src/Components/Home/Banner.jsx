import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerShared from "../Shared/BannerShared";
import banner from "../../assets/banner.webp";
import banner2 from "../../assets/banner2.webp";
import banne3 from "../../assets/women.webp";
import banne4 from "../../assets/banner3.webp";
import banne5 from "../../assets/women2.webp";

const Banner = () => {
  return (
    <div>
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
        <SwiperSlide>
          <BannerShared
            head={"Latest"}
            head2={"Arraivels"}
            img={banner}
          ></BannerShared>
        </SwiperSlide>
        <SwiperSlide>
          <BannerShared
            head={"New"}
            head2={"Collections"}
            img={banner2}
          ></BannerShared>
        </SwiperSlide>
        <SwiperSlide>
          <BannerShared
            head={"Visit"}
            head2={"Shop"}
            img={banne3}
          ></BannerShared>
        </SwiperSlide>
        <SwiperSlide>
          <BannerShared
            head={"Latest"}
            head2={"Arraivels"}
            img={banne4}
          ></BannerShared>
        </SwiperSlide>
        <SwiperSlide>
          <BannerShared
            head={"Latest"}
            head2={"Arraivels"}
            img={banne5}
          ></BannerShared>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
