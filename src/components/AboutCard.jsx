import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Card = styled.section`
  display: flex;
  align-items: ${(props) => (props.right ? "flex-end" : "flex-start")};
  flex-direction: column;
  padding: 10px 20px 10px 20px;
  background: ${(props) => (props.right ? "white" : "#ebf8ff")};
`;

const Title = styled.h3`
  background: #7664a8;
  border-radius: 10px;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.right ? "flex-end" : "flex-start")};
  align-items: center;
`;

const Paragraph = styled.p`
  text-align: justify;
  margin-top: 0px;
`;

const AboutCard = ({ title, description, right }) => {
  return (
    <Card right={right}>
      <Title right={right}>
        {!right && <ArrowForwardIosIcon />}
        {title}
        {right && <ArrowBackIosNewIcon />}
      </Title>
      <Paragraph>{description}</Paragraph>
    </Card>
  );
};

export default AboutCard;
