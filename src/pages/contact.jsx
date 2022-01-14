import React from "react";
import ContactForm from "../components/ContactForm";
import ContactpageActions from "../components/ContactpageActions";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 20px;
  width: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const contact = () => {
  return (
    <Container>
      <ContactpageActions />
      <ContactForm />
    </Container>
  );
};

export default contact;
