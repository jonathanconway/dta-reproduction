import styled from "styled-components";

export const DocumentsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DocumentsSectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const DocumentsSectionRemaining = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 2rem;
  background-color: #0f4059;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const DocumentsSectionMain = styled.div``;
