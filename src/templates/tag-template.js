import React from "react";
import { graphql } from "gatsby";
import Card from "../components/Card";
import styled from "styled-components";
import AllTags from "../components/AllTags";
import Seo from "../components/SEO";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 50px;
`;

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 0px;
  width: 100%;
`;

const Title = styled.h1`
  line-height: 0px;
  margin: 0px;
  font-size: 1rem;
`;

const TagTemplate = ({ data, pageContext }) => {
  const projects = data.allContentfulProject.nodes;
  const { tag } = pageContext;
  return (
    <>
      <Seo title={tag} />
      <PageWrapper>
        <Title>#{tag}</Title>
        <Container>
          {projects.map((project, index) => {
            return (
              <Card
                key={index}
                title={project.title}
                image={project.image.gatsbyImageData}
                name={project.name}
                shortDescription={project.shortDescription.shortDescription}
                index={index}
              />
            );
          })}
        </Container>
        <AllTags />
      </PageWrapper>
    </>
  );
};

export const query = graphql`
  query GetProjectTag($tag: String) {
    allContentfulProject(
      sort: { fields: title, order: ASC }
      filter: { tags: { tags: { eq: $tag } } }
    ) {
      nodes {
        website
        title
        tags {
          tags
        }
        shortDescription {
          shortDescription
        }
        repoClient
        name
        longDescription {
          longDescription
        }
        image {
          gatsbyImageData
        }
        id
        date
      }
    }
  }
`;

export default TagTemplate;
