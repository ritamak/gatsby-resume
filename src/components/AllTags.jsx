import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Chip, Grid } from "@mui/material";
import styled from "styled-components";

const TagContainer = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  background: #ebf8ff;
  padding: 20px;
  border-radius: 10px;
`;
const TagWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5px;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

const AllTags = () => {
  const { allContentfulProject } = useStaticQuery(data);

  const ArrayOfTags = [];
  allContentfulProject.nodes.map((tag) => {
    return ArrayOfTags.push(tag.tags.tags);
  });
  const tags = ArrayOfTags.flat();

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  let uniqueTags = tags.filter(onlyUnique);

  return (
    <TagContainer>
      <h1>All Tags</h1>
      <TagWrapper>
        {uniqueTags.map((tag, index) => {
          return (
            <Grid key={index}>
              <StyledLink to={`/tags/${tag}`}>
                <Chip
                  style={{ cursor: "pointer" }}
                  label={tag}
                  color="secondary"
                  variant="outlined"
                />
              </StyledLink>
            </Grid>
          );
        })}
      </TagWrapper>
    </TagContainer>
  );
};

export default AllTags;

const data = graphql`
  {
    allContentfulProject {
      nodes {
        tags {
          tags
        }
      }
    }
  }
`;
