import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { useWhyDidYouUpdate } from "../pages/useWhyDidYouUpdate";

const Button = styled.button`
  background: ${(props) => (props.primary ? "#005dff" : "white")};
  color: ${(props) => (props.primary ? "white" : "#005dff")};
  font-size: 18px;
  font-weight: 600;
  margin: 8px;
  padding: 0 8px;
  border: 2px solid #005dff;
  border-radius: 30px;
  height: 45px;
  width: 200px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${(props) => (props.primary ? "#002f80" : "white")};
    border: 2px solid #002f80;
  }
`;

const PrimaryButton = (props) => {
  useWhyDidYouUpdate("primary button", props);

  const { label, primary, onClick } = props;

  return (
    <Button primary={primary} onClick={onClick}>
      {label}
    </Button>
  );
};

PrimaryButton.propTypes = {
  label: PropTypes.node,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
};

export default PrimaryButton;
