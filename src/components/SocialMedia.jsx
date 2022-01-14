import React from "react";
import styled from "styled-components";
import { GitHub, Email, LinkedIn, Instagram } from "@mui/icons-material";

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
        data-hover="email"
      >
        <Email />
      </StyledLink>
    </Container>
  );
};

export default SocialMedia;
