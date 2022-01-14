import React from "react";
import { graphql } from "gatsby";
import Card from "../components/Card";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const TagTemplate = ({ data, pageContext }) => {
  const projects = data.allContentfulProject.nodes;
  console.log(projects);
  return (
    <Container>
      {projects.map((project, index) => {
        return (
          <Card
            title={project.title}
            image={project.image.gatsbyImageData}
            name={project.name}
            shortDescription={project.shortDescription.shortDescription}
            index={index}
          />
        );
      })}
    </Container>
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
