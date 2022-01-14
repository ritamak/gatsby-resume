import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  background: #7664a8;
  padding: 10px;
  border-radius: 10px;
`;

const LinkButton = ({ link, linkText }) => {
  return <StyledLink to={link}>{linkText}</StyledLink>;
};

export default LinkButton;
