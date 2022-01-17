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
  width: 30%;
  gap: 20px;
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
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0px;
`;

const Paragraph = styled.p`
  font-size: 1.3rem;
  text-align: justify;
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
