import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Content = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "30px")};
  padding: ${(props) => (props.padding ? props.padding : "12px")};
  margin: ${(props) => (props.padding ? props.padding : "12px")};
`;

const CardContent = (props) => {
  const { children, fontSize, lineHeight, rowAlign } = props;

  return (
    <Content fontSize={fontSize} lineHeight={lineHeight} rowAlign={rowAlign}>
      {children}
    </Content>
  );
};

CardContent.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  rowAlign: PropTypes.bool,
};

export default CardContent;
