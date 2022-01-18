import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import styled from "styled-components";
import Scroll from "react-scroll";

const TopButtonWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 30px;
  @media (min-width: 900px) {
    width: 90%;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-self: flex-end;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const StyledArrowCircleUpIcon = styled(ArrowCircleUpIcon)`
  transform: scale(1.9);
  color: #7664a8;
`;

const GoToTopButton = () => {
  let scroll = Scroll.animateScroll;

  return (
    <TopButtonWrapper>
      <StyledButton onClick={() => scroll.scrollToTop()}>
        <StyledArrowCircleUpIcon />
      </StyledButton>
    </TopButtonWrapper>
  );
};

export default GoToTopButton;
