import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Chip, Grid } from "@mui/material";

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.section`
  max-width: 90%;
  margin-bottom: 0px;
  @media (min-width: 900px) {
    max-width: 40%;
  }
`;

const BannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: #ebf8ff;
  padding: 20px;
  border-radius: 15px;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const BannerTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 0;
  color: #7664a8;
  font-family: "Mochiy Pop P One";
  margin-top: 5px;
  margin-bottom: 35px;
  @media (min-width: 900px) {
    margin-top: 30px;
  }
`;

const LongDescription = styled.p`
  text-align: justify;
  margin-top: 0px;
  font-size: 1rem;
  @media (min-width: 900px) {
    margin-top: 30px;
  }
`;

const LinkWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
  background: #7664a8;
  padding: 5px 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 0.8em !important;
`;

const TagContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 900px) {
    width: 20%;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const TagWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const BottomSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40px;
  gap: 30px;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const DescriptionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  @media (min-width: 900px) {
    width: 80%;
  }
`;

const TagLink = styled(Link)`
  text-decoration: none;
`;

const ShortDescription = styled.p`
  text-align: justify;
  font-size: 1rem;
`;

const DetailedProject = ({
  title,
  repoClient,
  image,
  website,
  longDescription,
  shortDescription,
  tags,
}) => {
  return (
    <PageWrapper>
      <BannerContainer>
        <ImageWrapper>
          <GatsbyImage image={image} alt={title} />
        </ImageWrapper>
        <BannerTextWrapper>
          <StyledTitle>{title}</StyledTitle>
          <ShortDescription>{shortDescription}</ShortDescription>
        </BannerTextWrapper>
      </BannerContainer>
      <BottomSection>
        <TagContainer>
          <h1>Tags</h1>
          <TagWrapper>
            {tags.map((tag, index) => {
              return (
                <Grid key={index}>
                  <TagLink to={`/tags/${tag}`}>
                    <Chip
                      label={tag}
                      component="a"
                      color="secondary"
                      variant="outlined"
                      clickable
                    />
                  </TagLink>
                </Grid>
              );
            })}
          </TagWrapper>
        </TagContainer>
        <DescriptionWrapper>
          <LongDescription>{longDescription}</LongDescription>
          <LinkWrapper>
            <StyledLink
              target="_blank"
              rel="noreferrer noopener"
              href={repoClient}
            >
              repo
            </StyledLink>
            <StyledLink
              target="_blank"
              rel="noreferrer noopener"
              href={website}
            >
              website
            </StyledLink>
          </LinkWrapper>
        </DescriptionWrapper>
      </BottomSection>
    </PageWrapper>
  );
};

export default DetailedProject;
