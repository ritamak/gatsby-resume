import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => (props.theme === "white" ? "white" : "grey")};
    margin:0px;
    font-family: "Prompt";

  }
  `;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin-top: 40px;
  margin-bottom: 100px;
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
    </div>
  );
}
