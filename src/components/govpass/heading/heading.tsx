import { ReactNode } from "react";
import * as Styled from "./heading.styles";

interface HeadingProps {
  readonly children: ReactNode;
  readonly level: 1 | 2 | 3;
}

export function Heading({ children, level }: HeadingProps) {
  switch (level) {
    case 1:
      return <Styled.H1>{children}</Styled.H1>;
    case 2:
      return <Styled.H2>{children}</Styled.H2>;
    case 3:
    default:
      return <Styled.H3>{children}</Styled.H3>;
  }
}
