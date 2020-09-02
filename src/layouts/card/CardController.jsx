import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Controller = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: flex-start;
  padding: 12px;
  margin: 12px;
`;

const CardController = (props) => {
  const { children, alignRow } = props;
  return <Controller row={alignRow}>{children}</Controller>;
};

CardController.propTypes = {
  children: PropTypes.node,
  alignRow: PropTypes.bool,
};

export default CardController;
