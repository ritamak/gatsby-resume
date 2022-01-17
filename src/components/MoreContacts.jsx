import React from "react";
import { Email, Phone } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const StyledLink = styled.a`
  color: #7664a8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 2px;
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
    top: 0.4em;
    left: 0;
    width: 100%;
    font-weight: bolder;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.4rem;
    opacity: 0;
    transform: translate(-100%, 0);
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
  div > svg {
    height: 100%;
  }
`;

const MoreContacts = () => {
  return (
    <Container>
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

export default MoreContacts;
