import React from "react";
import styled from "styled-components";

import { devices } from "constants/index";

import Box from "ui/Box";

const StyledResponsiveSquare = styled(Box)`
  width: 132px;
  height: 132px;
  @media ${devices.mobileL} {
    width: 99px;
    height: 99px;
  }
`;

const ResponsiveSquare = (props) => {
  const { children, ...rest } = props;
  return (
    <StyledResponsiveSquare border {...rest}>
      {children}
    </StyledResponsiveSquare>
  );
};

export default ResponsiveSquare;
