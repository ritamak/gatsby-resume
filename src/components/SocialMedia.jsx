import React from "react";
import styled from "styled-components";
import { GitHub, Email, LinkedIn, Instagram, Phone } from "@mui/icons-material";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  @media (min-width: 900px) {
    gap: 20px;
  }
`;

const StyledLink = styled.a`
  color: #7664a8;
`;

const PhoneLink = styled.a`
  text-decoration: none;
  position: relative;
  text-align: center;
  color: #7664a8;

  :hover:before {
    opacity: 1;
    transform: translate(0, 0);
  }
  :before {
    content: attr(data-hover);
    position: absolute;
    top: 0.2em;
    left: 0;
    font-weight: bolder;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.4rem;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  :hover div {
    opacity: 0;
    transform: translate(100%, 0);
  }
  div {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 2em;
    transition: all 0.3s ease-in-out;
  }
`;
const SocialMedia = () => {
  return (
    <Container>
      <StyledLink
        href="https://www.instagram.com/ritapmak/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Instagram />
      </StyledLink>
      <StyledLink
        href="https://www.github.com/ritamak/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GitHub />
      </StyledLink>
      <StyledLink
        href="https://www.linkedin.com/in/rita-mak/"
        target="_blank"
        rel="noreferrer noopener"
        data-hover="linkedin"
      >
        <LinkedIn />
      </StyledLink>
      <StyledLink
        href="mailto:ritapmak@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Email />
      </StyledLink>
      <PhoneLink href="tel:00351916182454" data-hover="PT">
        <div>
          <Phone />
        </div>
      </PhoneLink>
      <PhoneLink href="tel:004407907009418" data-hover="EN">
        <div>
          <Phone />
        </div>
      </PhoneLink>
    </Container>
  );
};

export default SocialMedia;
