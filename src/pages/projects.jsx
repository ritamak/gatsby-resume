import React from "react";
import Card from "../components/Card";
import GoToTopButton from "../components/GoToTopButton";
import Seo from "../components/SEO";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

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
        <GoToTopButton />
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
        name
        repoClient
        shortDescription {
          shortDescription
        }
        website
        title
        tags {
          tags
        }
        longDescription {
          longDescription
        }
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
