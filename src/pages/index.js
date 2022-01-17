import * as React from "react";
import Seo from "../components/SEO";
import Banner from "../components/Banner";
import HomepageActions from "../components/HomepageActions";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 0px 20px;
`;

const IndexPage = () => {
  return (
    <>
      <Seo title="home" />
      <Wrapper>
        <Banner />
        <HomepageActions />
      </Wrapper>
    </>
  );
};

export default IndexPage;
