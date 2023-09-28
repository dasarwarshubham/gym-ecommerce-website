import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import BsContainer from "react-bootstrap/Container";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import { FaPhone, FaEnvelope } from 'react-icons/fa6';
import { PHONE, EMAIL } from '../constants/routes.js'


const Header = styled.header`
  background-image: url("/images/anastase-maragos-9dzWZQWZMdE-unsplash.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
  color: #ffffff;
`;

const Container = styled(BsContainer)`
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  h6, p {
    font-size: 16px;
  }

  p {
    margin-bottom: 10px;
  }

  section {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .values-section{
    background-color: #f5f5f5;
    padding: 4rem 2rem;
    border-radius: 1rem;
    ul {
      margin-left: 3rem;
      @media (max-width: 768px) {
        margin-left: 0;
      }
    }

    li {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`

const AboutPage = () => {
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
    <div>
      <Header>
        <h1>About Us</h1>
      </Header>

      <Container className="px-4">
        <section className="about-section">
          <p className="mb-5">
            At FitFlex, we are passionate about fitness and dedicated to providing
            top-of-the-line gym equipment to fitness enthusiasts of all levels. Our
            journey began with a vision to empower individuals in their pursuit of a
            healthier and active lifestyle. Since our inception, we have been driven
            by a mission to revolutionize the fitness industry by offering
            premium-quality exercise equipment that delivers unparalleled
            performance and durability.
          </p>
          <h6>Our Commitment:</h6>
          <p className="mb-5">
            We pride ourselves on the commitment to excellence and customer
            satisfaction. Every piece of gym equipment in our collection is
            carefully curated and designed to meet the highest standards of quality
            and functionality. We believe that fitness should be accessible to all,
            which is why we strive to offer a diverse range of products that cater
            to different fitness goals and preferences.
          </p>
          <h6>Quality and Innovation:</h6>
          <p className="mb-5">
            With a strong emphasis on quality and innovation, we collaborate with
            industry experts and fitness enthusiasts to develop cutting-edge fitness
            equipment that is both efficient and reliable. Each product undergoes
            rigorous testing to ensure it meets our stringent quality benchmarks,
            allowing our customers to work out with confidence.
          </p>
          <h6>Expert Customer Support:</h6>
          <p className="mb-5">
            At FitFlex, we value our customers and prioritize their needs. Our
            dedicated team of fitness experts is always ready to assist with any
            inquiries or provide guidance on selecting the right equipment for
            individual fitness goals. We believe in building strong relationships
            with our customers and are committed to providing exceptional customer
            support throughout their fitness journey.
          </p>
          <h6>A Holistic Approach:</h6>
          <p className="mb-5">
            Our commitment to fitness goes beyond providing top-notch equipment. We
            believe in promoting a holistic approach to wellness, encompassing not
            only physical fitness but also mental well-being. Through our blog and
            educational resources, we share valuable fitness tips, nutritional
            advice, and motivational content to inspire and support our customers in
            leading a healthy and balanced lifestyle.
          </p>
          <h6>Join Our Fitness Community:</h6>
          <p className="mb-5">
            At FitFlex, we take pride in fostering a vibrant fitness community where
            like-minded individuals come together to support and motivate one
            another. We celebrate every fitness achievement and share success
            stories that inspire others to push their boundaries and achieve
            greatness.
          </p>

          <p className="mb-5">
            We are grateful to our loyal customers, whose trust and support have
            been the driving force behind our success. As we continue to evolve and
            grow, our mission remains unwavering - to empower every individual to
            reach their fitness potential and embark on a lifelong journey of health
            and vitality.
          </p>
          <p className="mb-5">
            Welcome to FitFlex - Your Destination for Fitness Excellence!
          </p>
        </section>
        <section className="team-section">
          <h2>Our Team</h2>
          <p>
            Meet the amazing people behind FitFlex who work tirelessly to provide
            you with the best gym equipment.
          </p>
          <Swiper
            modules={[Autoplay, Pagination]}
            className="my-5"
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
          >
            {teamMembers.map((member, idx) => (
              <SwiperSlide key={`member-${idx}`}>
                <TeamMemberCard key={idx} data={member} />
              </SwiperSlide>
            ))}
            <div className="d-flex justify-content-center justify-content-lg-start">
              <div>
                <div className="custom-swiper-pagination"></div>
              </div>
            </div>
          </Swiper>
        </section>
        <section className="values-section">
          <h2>Our Core Values</h2>
          <ul>
            <li>
              We believe in providing high-quality gym equipment to help people
              achieve their fitness goals.
            </li>
            <li>We prioritize customer satisfaction and excellent service.</li>
            <li>
              We promote a healthy and active lifestyle among our team members and
              customers.
            </li>
          </ul>
        </section>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or inquiries, feel free to get in touch with
            us.
          </p>
          <div className="contact-info">
            <p>
              <FaPhone size={16} />&nbsp;
              <Link className="nav-link d-inline-flex" to={PHONE}>555-555-5555</Link>
            </p>
            <p>
              <FaEnvelope size={16} />&nbsp;
              <Link className="nav-link d-inline-flex" to={EMAIL}>hello.fitflex@gmail.com</Link>
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutPage;
