import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const CardPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 12px;
  border-style: solid;
  border-width: thin;
  border-color: white;
  border-radius: 16px;
  box-shadow: 0 18px 50px -10px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const Card = (props) => {
  const { children } = props;

  return <CardPanel>{children}</CardPanel>;
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
