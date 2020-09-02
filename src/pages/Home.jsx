import React from "react";
import PrimaryButton from "../components/PrimaryButton";

import { ReactComponent as Arrow } from "../common/assets/arrow.svg";

import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { HOME_TITLE, HOME_DESCRIPTION } from "../common/constants/constant";

const HomePanel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #005dff;
  align-items: flex-start;
  padding: 16px;
  margin: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HomeTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: #2d3748;
`;

const HomeDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #a0aec0;
`;

const Home = () => {
  const history = useHistory();

  const beginTest = () => {
    history.push("/quiz");
  };

  return (
    <HomePanel>
      <HomeTitle>{HOME_TITLE}</HomeTitle>
      <HomeDescription>{HOME_DESCRIPTION}</HomeDescription>

      <Arrow />

      <PrimaryButton label="Begin" primary onClick={beginTest} />
    </HomePanel>
  );
};

export default Home;
