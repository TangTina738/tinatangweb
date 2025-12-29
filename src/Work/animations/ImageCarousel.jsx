import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ImageCarousel({ images = [] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      spaceBetween={24}
      slidesPerView={3}
      speed={6000} // controls scroll smoothness
      autoplay={{
        delay: 0, // key for continuous scroll
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      allowTouchMove
      breakpoints={{
        0: { slidesPerView: 1.2 },
        768: { slidesPerView: 2.2 },
        1200: { slidesPerView: 3.2 },
      }}
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img}
            alt={`carousel-${idx + 1}`}
            className="img-fluid w-100"
            style={{ borderRadius: 16 }}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
