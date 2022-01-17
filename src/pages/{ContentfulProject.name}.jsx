import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import DetailedProject from "../components/DetailedProject";
import Seo from "../components/SEO";

const Project = ({ data }) => {
  const {
    title,
    repoClient,
    name,
    image,
    id,
    date,
    website,
    longDescription: { longDescription },
    shortDescription: { shortDescription },
    tags: { tags },
  } = data.contentfulProject;

  const pathToImage = getImage(image);

  return (
    <>
      <Seo title={name} />
      <DetailedProject
        tags={tags}
        website={website}
        title={title}
        repoClient={repoClient}
        name={name}
        image={pathToImage}
        id={id}
        date={date}
        longDescription={longDescription}
        shortDescription={shortDescription}
      />
    </>
  );
};

export const query = graphql`
  query getSingleProject($name: String) {
    contentfulProject(name: { eq: $name }) {
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
`;

export default Project;
