import React from "react";
import styled from "styled-components";
import { GitHub, Email, LinkedIn, Instagram } from "@mui/icons-material";
//import PhoneIcon from "@mui/icons-material/Phone";
//import FileDownloadIcon from "@mui/icons-material/FileDownload";
//import Pdf from "../assets/documents/RitaMakCV.pdf";

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
        data-hover="instagram"
      >
        <Instagram />
      </StyledLink>
      <StyledLink
        href="https://www.github.com/ritamak/"
        target="_blank"
        rel="noreferrer noopener"
        data-hover="github"
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

/*
<Link href={Pdf} target="_blank" rel="noreferrer" data-hover="CV">
        <div>
          <FileDownloadIcon />
        </div>
      </Link> 
      
       <Link href="tel:00351916182454" data-hover="PT">
        <div>
          <PhoneIcon />
        </div>
      </Link>
      <Link href="tel:004407907009418" data-hover="EN">
        <div>
          <PhoneIcon />
        </div>
      </Link>
      */
