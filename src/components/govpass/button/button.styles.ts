import styled from "styled-components";

export const Button = styled.button`
  background-color: #61d7d7;
  color: black;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  border: none;
  display: inline-block;
  cursor: pointer;

  &:hover,
  &:active {
    filter: brightness(110%);
  }
`;
