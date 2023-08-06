import React from "react";

import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "../../components/cards/TestimonialCard";

const Testimonials = (props) => {
  const data = [
    {
      image: "https://dummyimage.com/400x400/ededed/000000",
      name: "John, Owner of Elite Fitness",
      testimonial:
        "Fitflex equipment has been a game changer for my gym. Their durable and high-quality machines have been a hit with our members, and the customer service has been top notch.",
    },
    {
      image: "https://dummyimage.com/400x400/ededed/000000",
      name: "Sarah M.",
      testimonial:
        "I recently purchased the Fitflex resistance bands and I am blown away by the quality of the product.\nThey have helped me take my home workouts to the next level!",
    },
    {
      image: "https://dummyimage.com/400x400/ededed/000000",
      name: "Mike, Owner of Iron Strong Gym",
      testimonial:
        "Fitflex has helped me take my gym to the next level. The equipment is sleek and modern, and the variety of machines and weights has something for everyone.\nI'm impressed with the quality and affordability, and my members are too.",
    },
    {
      image: "https://dummyimage.com/400x400/ededed/000000",
      name: "Jenna L.",
      testimonial:
        "As a personal trainer, I am always recommending Fitflex's products to my clients. The quality and variety of their equipment is unmatched, and it's clear they truly care about helping people reach their fitness goals",
    },
    {
      image: "https://dummyimage.com/400x400/ededed/000000",
      name: "Karen, Owner of Powerhouse Fitness",
      testimonial:
        "Fitflex has exceeded my expectations in every way. Their customer service is unmatched, and the equipment is top of the line. It's clear that they take pride in their products, and it shows in the durability and performance of their machines.",
    },
    {
      image: "https://dummyimage.com/400x400/ededed/000000",
      name: "Dave, Owner of FitZone Gym",
      testimonial:
        "Fitflex has been an invaluable partner for my gym. The equipment is easy to use and maintain, and the company's commitment to quality and innovation is impressive.\nOur members love the equipment, and it's helped us attract new business as well.",
    },
    {
      image: "https://dummyimage.com/400x400/ededed/000000",
      name: "Shubham D.",
      testimonial:
        "Fitflex equipment has been a game changer for me. It's stylish, functional and has helped me stay on track with my fitness goals.\nHighly recommend!",
    },
    {
      image: "https://dummyimage.com/400x400/ededed/000000",
      name: "Tom S.",
      testimonial:
        "I had been struggling to find the motivation to work out at home, but Fitflex's products have completely changed that.\nThe sleek design and high-quality materials make me excited to exercise every day.",
    },
    {
      image: "https://dummyimage.com/400x400/ededed/000000",
      name: "Ashley T.",
      testimonial:
        "I was hesitant to invest in a home gym, but Fitflex's affordable equipment made it possible for me to create the perfect workout space in my basement.\nI couldn't be happier with my purchase.",
    },
    {
      image: "https://dummyimage.com/400x400/ededed/000000",
      name: "John D.",
      testimonial:
        "Fitflex's customer service is top-notch. When I had an issue with my order, they quickly resolved the problem and even gave me a discount on my next purchase.\nThat kind of service is hard to come by these days.",
    },
  ];
  return (
    <div className="overflow-hidden">
      <Container>
        <h2 className="my-5">Testimonials from satisfied customers</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          className="overflow-visible my-5"
          spaceBetween={50}
          slidesPerView={2}
          grabCursor
          autoplay={{ delay: 5000 }}
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((testimonial, idx) => (
            <SwiperSlide key={`testimonial-${idx}`}>
              <TestimonialCard data={testimonial} />
            </SwiperSlide>
          ))}
          <div className="my-5">
            <div>
              <div className="custom-swiper-pagination"></div>
            </div>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonials;
