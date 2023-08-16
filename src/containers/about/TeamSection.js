import React from "react";
import styled from "styled-components/macro";

import TeamMemberCard from "../../components/cards/TeamMemberCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Container = styled.section`
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .team-info {
    font-size: 16px;
  }

  .team-info p {
    margin-bottom: 10px;
  }
`;

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      description:
        "With over a decade of experience in the fitness industry, John is the driving force behind FitFlex.",
      imageUrl: "https://dummyimage.com/400x400/ededed/000000",
    },
    {
      name: "Emily Johnson",
      role: "Head of Product Development",
      description:
        "Emily is a fitness enthusiast and product specialist. Her expertise in understanding customer needs and market trends helps us design and develop cutting-edge fitness equipment.",
      imageUrl: "https://dummyimage.com/400x400/ededed/000000",
    },
    {
      name: "Michael Davis",
      role: "Senior Fitness Trainer",
      description:
        "Michael brings a wealth of fitness knowledge and training expertise to FitFlex. As a certified fitness trainer, he assists customers in selecting the right equipment and offers valuable workout tips.",
      imageUrl: "https://dummyimage.com/400x400/ededed/000000",
    },
    {
      name: "Sarah Turner",
      role: "Marketing Manager",
      description:
        "Sarah is the creative force behind FitFlex's marketing initiatives. With her innovative ideas and keen understanding of the fitness community, she helps us connect with our customers and build a vibrant fitness community.",
      imageUrl: "https://dummyimage.com/400x400/ededed/000000",
    },
    {
      name: "Alex Martinez",
      role: "Operations Manager",
      description:
        "Alex ensures smooth operations and logistics, from product sourcing to delivery. His meticulous approach and problem-solving skills keep the gears of FitFlex running efficiently.",
      imageUrl: "https://dummyimage.com/400x400/ededed/000000",
    },
    {
      name: "Jessica Lee",
      role: "Customer Support Specialist",
      description:
        "Jessica is the friendly face behind our customer support. Her dedication to providing personalized assistance ensures that every customer enjoys a seamless and delightful shopping experience.",
      imageUrl: "https://dummyimage.com/400x400/ededed/000000",
    },
    {
      name: "David Brown",
      role: "Lead Engineer",
      description:
        "David is the mastermind behind the engineering of our fitness equipment. His technical expertise and attention to detail guarantee that each product is engineered to perfection.",
      imageUrl: "https://dummyimage.com/400x400/ededed/000000",
    },
  ];
  return (
    <Container className="overflow-hidden my-5 py-5">
      <h2>Our Team</h2>
      <p>
        Meet the amazing people behind FitFlex who work tirelessly to provide
        you with the best gym equipment.
      </p>
      <Swiper
        modules={[Autoplay, Pagination]}
        className="overflow-visible my-5"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        grabCursor
        autoplay={{ delay: 3000 }}
        pagination={{
          el: ".custom-swiper-pagination",
          clickable: true,
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {teamMembers.map((member, idx) => (
          <SwiperSlide key={`member-${idx}`}>
            <TeamMemberCard key={idx} data={member} />
          </SwiperSlide>
        ))}
        <div className="my-5">
          <div>
            <div className="custom-swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
    </Container>
  );
};

export default TeamSection;
