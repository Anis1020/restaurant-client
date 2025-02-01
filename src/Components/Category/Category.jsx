import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
      <div>
        <SectionTitle
          heading={"Order now"}
          subHeading={"From 9am to 11pm "}
        ></SectionTitle>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-8"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h2 className="text-2xl text-center -mt-24">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className="text-2xl text-center -mt-24">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className="text-2xl text-center -mt-24">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className="text-2xl text-center -mt-24">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h2 className="text-2xl text-center -mt-24 pb-10">Salads</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
