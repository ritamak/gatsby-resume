import * as React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px 0px 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
`;

const Title = styled(Typography)`
  font-family: "Prompt" !important;
  margin-top: 2px !important;
`;

const Description = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
  text-align: justify;
  font-family: "Prompt" !important;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    min-height: 140px;
    max-height: 140px;
  }
  @media (min-width: 960px) {
    min-height: 150px;
    max-height: 150px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function ProjectCard({
  title,
  name,
  shortDescription,
  image,
  index,
}) {
  return (
    <Grid item xs={10} sm={5} md={3} key={index}>
      <StyledLink to={`/${name}`}>
        <StyledCard>
          <ImageWrapper>
            <GatsbyImage image={image} alt={name} />
          </ImageWrapper>
          <StyledCardContent>
            <Title gutterBottom variant="h5" component="div">
              {title}
            </Title>
            <Description variant="body2" color="text.secondary">
              {shortDescription}
            </Description>
          </StyledCardContent>
        </StyledCard>
      </StyledLink>
    </Grid>
  );
}
