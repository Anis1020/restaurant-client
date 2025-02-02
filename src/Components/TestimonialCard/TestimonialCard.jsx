import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const TestimonialCard = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="my-16">
      <SectionTitle
        heading={"What our client says"}
        subHeading={"Our work reviews"}
      ></SectionTitle>
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
        className="mySwiper border h-72 "
      >
        <div className="pt-12">
          {reviews.map((review) => (
            <SwiperSlide key={review._id} review={review}>
              <div className="px-28 flex flex-col items-center text-center py-10 pt-12 space-y-4 ">
                <Rating
                  style={{ maxWidth: 200 }}
                  value={review.rating}
                  readOnly
                  //   onChange={setRating}
                  //   items={2}
                  //   itemStyles={myStyles}
                  //   highlightOnlySelected
                  className="block text-center "
                />

                <h1 className="text-2xl font-bold">quat icon</h1>
                <p>{review.details}</p>
                <h1 className="text-2xl font-bold">{review.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialCard;
