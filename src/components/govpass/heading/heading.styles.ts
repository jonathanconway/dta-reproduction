import styled from "styled-components";
import { theme } from "../../../theme";

// Note: Margins are 0, because they should be controlled at the layout level.
// This makes it easier to customise them for specific pages.

export const H1 = styled.h1`
  color: ${theme.primary};
  margin: 0;
`;

export const H2 = styled.h2`
  color: ${theme.primary};
  margin: 0;
`;

export const H3 = styled.h3`
  color: ${theme.primary};
  margin: 0;
`;
