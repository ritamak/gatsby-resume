import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  @media (min-width: 900px) {
    gap: 20px;
  }
`;

const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 900px) {
    width: 60%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  background: #7664a8;
  padding: 5px 10px;
  border-radius: 10px;
  text-align: center;
  font-family: "Mochiy Pop P One";
  font-size: 0.8em !important;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-top: 40px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  text-align: justify;
  margin-bottom: 40px;

  @media (min-width: 900px) {
    margin-bottom: 20px;
  }
`;

const HomepageActions = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>Hey you! Welcome to my gatsby resume</Title>
        <Paragraph>
          I'm very glad to have you here. Let me introduce myself:{" "}
          <b>I'm Rita Mak</b> and I'm a portuguese <b>web developer</b>, but I
          can imagine you already know that. So please, let me help you find out
          more about myself:
        </Paragraph>
      </TextWrapper>
      <ButtonWrapper>
        <StyledLink to="/contact">contact</StyledLink>
        <StyledLink to="/projects">projects</StyledLink>
        <StyledLink to="/about">about</StyledLink>
      </ButtonWrapper>
    </Container>
  );
};

export default HomepageActions;
