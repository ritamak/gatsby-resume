import React from "react";
import Card from "../components/Card";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Seo from "../components/SEO";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
`;

const Projects = () => {
  const { allContentfulProject } = useStaticQuery(query);

  return (
    <>
      <Seo title="projects" />
      <Container>
        {allContentfulProject.nodes.map((project, index) => {
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
    </>
  );
};

export default Projects;

const query = graphql`
  {
    allContentfulProject {
      nodes {
        date
        id
        image {
          gatsbyImageData
          title
        }
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
      }
    }
  }
`;
