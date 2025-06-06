import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const BannerSection = () => {
  return (
    <>
      <h2 className="text-center py-10 font-bold text-4xl ">
        {" "}
        Local Event Discovery Platform
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/cS2KXBRd/bg-1.jpg"
            alt="Slide 1"
            className="w-full lg:h-[700px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/FLpDHMGt/bg-2.jpg"
            alt="Slide 2"
            className="w-full lg:h-[700px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/F468cXyw/corporate-event.jpg"
            alt="Slide 3"
            className="w-full lg:h-[700px] object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSection;
