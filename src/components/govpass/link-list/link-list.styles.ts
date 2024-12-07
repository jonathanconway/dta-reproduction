import styled, { css } from "styled-components";
import { theme } from "../../../theme";

export const LinkList = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  gap: 0.25rem;
  list-style: none;
`;

const LinkListItemA = css<{
  readonly isDone: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  ${({ isDone }) => `
  ${
    isDone
      ? `
        background-color: #EAF8EC;
  `
      : `
        background-color: #eff3f5;
  `
  }
  `}

  padding: 1rem;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: ${theme.primary};
  line-height: 1.5rem;

  ${({ isDone }) => `
  ${
    isDone
      ? `

  `
      : `

      &:hover,
      &:active {
        filter: brightness(98%);
      }
  `
  }
  `}

  svg {
    fill: ${theme.primary};
  }
`;

export const LinkListItem = styled.li<{
  readonly isDone: boolean;
}>`
  a {
    ${LinkListItemA}
  }
`;

export const LinkListItemMain = styled.div``;
