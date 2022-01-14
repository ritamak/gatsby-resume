import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => (props.theme === "white" ? "white" : "grey")};
    margin:0px;
    font-family: "Prompt";

  }
  `;

const PageWrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
`;

const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyle theme="white" />
      <Navbar />
      <StyledContainer>
        <PageWrapper> {children}</PageWrapper>
      </StyledContainer>
      <Footer />
    </div>
  );
}
