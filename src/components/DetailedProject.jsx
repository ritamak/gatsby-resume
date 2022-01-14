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
  max-width: 40%;
`;

const BannerContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: #ebf8ff;
  padding: 20px;
`;

const BannerTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  line-height: 0;
  color: #7664a8;
`;

const LongDescription = styled.p`
  text-align: justify;
`;

const LinkWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  background: #7664a8;
  padding: 10px;
  border-radius: 10px;
`;

const TagContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 20%;
`;

const TagWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
`;

const BottomSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 40px;
  gap: 30px;
`;

const DescriptionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: flex-end;
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
          <p>{shortDescription}</p>
        </BannerTextWrapper>
      </BannerContainer>
      <BottomSection>
        <TagContainer>
          <h1>Tags</h1>
          <TagWrapper>
            {tags.map((tag, index) => {
              return (
                <Grid key={index}>
                  <Link to={`/tags/${tag}`}>
                    <Chip
                      label={tag}
                      component="a"
                      color="secondary"
                      variant="outlined"
                      clickable
                    />
                  </Link>
                </Grid>
              );
            })}
          </TagWrapper>
        </TagContainer>
        <DescriptionWrapper>
          <LongDescription>{longDescription}</LongDescription>
          <LinkWrapper>
            <StyledLink to={repoClient}>Repo Client</StyledLink>
            <StyledLink to={website}>Website</StyledLink>
          </LinkWrapper>
        </DescriptionWrapper>
      </BottomSection>
    </PageWrapper>
  );
};

export default DetailedProject;
