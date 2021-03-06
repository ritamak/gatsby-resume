import React from "react";
import { Link } from "gatsby";
import SocialMedia from "../components/SocialMedia";
import styled from "styled-components";

const StyledWrapper = styled.section`
  max-width: 450px;

  @media (min-width: 900px) {
    width: 50%;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-top: 0px;
`;

const Paragraph = styled.p`
  text-align: justify;
  font-size: 1rem;
`;

const ContactpageActions = () => {
  return (
    <StyledWrapper>
      <Title>Want to get in touch?</Title>
      <Paragraph>
        I'll get back to you as soon as possible. In the meantime, and if you
        already didn't, check out some of my{" "}
        <Link to="/projects">personal projects</Link> or find out a bit more{" "}
        <Link to="/about">about</Link> me. <br></br>
        <br></br>
        <b>Also, feel free to connect or contact me via:</b>
      </Paragraph>
      <SocialMedia />
    </StyledWrapper>
  );
};

export default ContactpageActions;
