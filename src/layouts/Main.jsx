import React from "react";
import styled from "styled-components";
import kirby from "../common/assets/kirby.png";

const MainPanel = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
`;

const Image = styled.img`
  width: 750px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Main = (props) => {
  const { children } = props;

  return (
    <MainPanel>
      {children}

      <Image src={kirby} alt={"Mr Kirby"} />
    </MainPanel>
  );
};

export default Main;
