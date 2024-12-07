import styled, { css } from "styled-components";

export const LinkList = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  gap: 0.25rem;
  list-style: none;
`;

const LinkListItemA = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  background-color: #eff3f5;
  padding: 1rem;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
  line-height: 1.5rem;

  &:hover,
  &:active {
    filter: brightness(98%);
  }
`;

export const LinkListItem = styled.li`
  a {
    ${LinkListItemA}
  }
`;

export const LinkListItemMain = styled.div``;
