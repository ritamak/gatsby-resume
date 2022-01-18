import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    margin:0px;
    font-family: "Prompt";
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin-top: 10px;
  margin-bottom: 100px;
  @media (min-width: 900px) {
    margin-top: 50px;
  }
`;

const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <StyledContainer>
      <GlobalStyle />
      <Navbar />
      <PageWrapper> {children}</PageWrapper>
    </StyledContainer>
  );
}
