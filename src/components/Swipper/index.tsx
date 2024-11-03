import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import React, { ReactElement } from 'react';

const Swipper = ({
  children
}: { children: ReactElement[] }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {
          children.map((element, key) => (
              <SwiperSlide key={key}>{element}</SwiperSlide>
            )
          )
        }
      </Swiper>
    </>
  );
}

export default Swipper