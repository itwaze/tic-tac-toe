import React from "react";
import styled from "styled-components";

import { devices } from "constants/index";

import Box from "ui/Box";

const StyledResponsiveWrapper = styled(Box)`
  width: 398px;
  margin: 0px auto;
  flex-direction: column;
  @media ${devices.mobileL} {
    width: 298px;
  }
`;

const ResponsiveWrapper = ({ children }) => {
  return <StyledResponsiveWrapper>{children}</StyledResponsiveWrapper>;
};

export default ResponsiveWrapper;
