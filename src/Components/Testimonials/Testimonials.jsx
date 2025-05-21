import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "John D.",
      comment:
        "I rented a Toyota Corolla for my weekend trip. The car was clean, the pickup was smooth, and the price was very reasonable. Highly recommended!",
      rating: 5,
      image: "assets/client-1.jpg",
    },
    {
      name: "Amina Rahman",
      comment:
        "Service was great! The customer support was responsive, and the driver was professional. The Honda Civic I rented was in top condition.",
      rating: 4,
      image: "assets/testimonial-blog-post.jpg",
    },
    {
      name: "Markus L.",
      comment:
        "Excellent experience! I booked a Toyota HiAce for family travel. Enough space and very comfortable ride. Will rent again.",
      rating: 5,
      image: "assets/images.jpg",
    },
    {
      name: "Farhana Akter",
      comment:
        "Affordable pricing and easy booking system. The condition of the car was really good. Great for city travel.",
      rating: 4,
      image: "assets/images (1).jpg",
    },
    {
      name: "Ravi Sharma",
      comment:
        "The best car rental experience I’ve had so far. Everything was on time, and the car was fuel-efficient. Will definitely recommend to friends.",
      rating: 5,
      image: "assets/ravi.jpg",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="star filled" />
        ) : (
          <FaRegStar key={i} className="star empty" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="testimonials-section" id="testimonial">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img
                src={review.image}
                alt={review.name}
                className="client-img"
              />
              <div className="stars">{renderStars(review.rating)}</div>
              <p className="comment">"{review.comment}"</p>
              <h4 className="client-name">- {review.name}</h4>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
