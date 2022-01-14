import React from "react";
import ContactForm from "../components/ContactForm";
import ContactpageActions from "../components/ContactpageActions";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  width: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
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
