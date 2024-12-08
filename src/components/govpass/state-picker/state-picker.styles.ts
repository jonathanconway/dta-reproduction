import styled from "styled-components";
import { theme } from "../../../theme";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StateOptionLabel = styled.label`
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  display: inline-block;
  cursor: pointer;
  width: 8rem;
  text-align: center;

  &:has(input:checked) {
    border: solid 1px ${theme.primary};
    background-color: ${theme.primary};
    color: ${theme.primaryInverse};
  }

  &:not(:checked) {
    border: solid 1px ${theme.primary};
    color: ${theme.primary};
  }

  input {
    visibility: hidden;
    position: absolute;
  }
`;

export const StateOption = styled.input``;
