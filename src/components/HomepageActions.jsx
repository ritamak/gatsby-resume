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
  gap: 50px;
`;

const TextWrapper = styled.section``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  background: #7664a8;
  padding: 10px;
  width: 50%;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.3rem;
  text-align: justify;
`;
const HomepageActions = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>Welcome! </Title>
        <Paragraph>
          I'm very glad to have you here. Let me introduce myself:{" "}
          <b>I'm Rita and I'm a web developer,</b> but I can imagine you already
          know that. So please, let me help you find out more!
        </Paragraph>
      </TextWrapper>
      <ButtonWrapper>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </ButtonWrapper>
    </Container>
  );
};

export default HomepageActions;
