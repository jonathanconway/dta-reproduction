import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  background-color: #f1f3f5;
  padding-bottom: 2rem;
  border-top: solid 1px #96abb6;
`;

export const FooterInner = styled.div`
  display: flex;
  flex-direction: row;
  width: 50rem;
  margin: 2rem auto;
  font-size: 0.85rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10rem;
  gap: 1rem;
`;

export const FooterLink = styled.div`
  a {
    color: #0f4059;
    font-weight: bold;
  }
`;
