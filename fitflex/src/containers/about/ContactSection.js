import React from "react";
import { MdMail, MdPhone } from "react-icons/md";

import styled from "styled-components/macro";

const Container = styled.section`
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .contact-info {
    font-size: 16px;
  }

  .contact-info p {
    margin-bottom: 10px;
  }
`;

const ContactSection = () => {
  return (
    <Container className="my-5 py-5">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or inquiries, feel free to get in touch with
        us.
      </p>
      <div className="contact-info">
        <p>
          <MdMail /> &nbsp; Email: info@fitflex.com
        </p>
        <p>
          <MdPhone /> &nbsp; Phone: +1 (555) 123-4567
        </p>
      </div>
    </Container>
  );
};

export default ContactSection;
