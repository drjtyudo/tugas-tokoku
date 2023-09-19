import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import Cards from "../Components/Card/Card";
import Category from "../Components/Category/Category";
import barang from "../../data/barang";

const Home = () => {
  return (
    <>
      {/* banner */}
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
          <img
            className="w-[1200px] m-auto my-10 rounded-[10px] "
            src="/images/banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[1200px] m-auto my-10 rounded-[10px] "
            src="/images/banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[1200px] m-auto my-10 rounded-[10px] "
            src="/images/banner.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      {/* end */}

      {/* Carousel */}
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-[80%] py-10"
      >
        <SwiperSlide>
          <Cards.CardSlider />
        </SwiperSlide>
        <SwiperSlide>
          <Cards.CardSlider />
        </SwiperSlide>
        <SwiperSlide>
          <Cards.CardSlider />
        </SwiperSlide>
        <SwiperSlide>
          <Cards.CardSlider />
        </SwiperSlide>
        <SwiperSlide>
          <Cards.CardSlider />
        </SwiperSlide>
        <SwiperSlide>
          <Cards.CardSlider />
        </SwiperSlide>
        <SwiperSlide>
          <Cards.CardSlider />
        </SwiperSlide>
      </Swiper>
      {/* End */}
      <hr className="my-10 mx-20" />
      {/* Category */}
      <Category Category="Kategori 1">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="py-10"
        >
          {barang.map((e) => (
            <SwiperSlide>
              <Cards.CardKategori
                img={e.image}
                title={e.title}
                desc={e.desc}
                price={e.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Category>

      <Category Category="Kategori 2">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="py-10"
        >
          {barang.map((e) => (
            <SwiperSlide>
              <Cards.CardKategori
                img={e.image}
                title={e.title}
                desc={e.desc}
                price={e.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Category>
      {/* end */}
    </>
  );
};

export default Home;
