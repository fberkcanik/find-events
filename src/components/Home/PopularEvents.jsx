import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function PopularEvents() {
  return (
    <>
      <div className="flex flex-row mb-5 mt-5 sm:px-24 px-5 justify-between items-center ">
        <h1 className="text-3xl font-bold">Popüler Etkinlikler</h1>
        {/* link to all */}
        <Link to={"/"} className="text-sm font-semibold text-red-500">
          {" "}
          Tümünü Gör
          <i className="fas fa-arrow-right mx-1"></i>
        </Link>
      </div>
      <div className="w-[100%] flex justify-center px-5 sm:px-24 mb-10">
      <Swiper
        effect="coverflow"
        spaceBetween={25}
        
        slidesPerView={6}
        loop={true}
        breakpoints={{
          320: {
            // width: 320,
            slidesPerView: 2,
          },
          576: {
            // width: 576,
            slidesPerView: 4,
          },
          768: {
            // width: 768,
            slidesPerView: 6,
          },
          992: {
            // width: 992,
            slidesPerView: 9,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          style={{ width: "90%" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="random"
              className="rounded-2xl"
            />
            <p className="text-sm font-bold">Etkinlik Adı</p>
            <p className="text-xs font-extralight">Etkinlik Açıklaması</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
     
    </>
  );
}

export default PopularEvents;
