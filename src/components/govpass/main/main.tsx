import { ReactNode } from "react";
import * as Styled from "./main.styles";

interface MainProps {
  readonly children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <Styled.Main>
      <Styled.MainInner>{children}</Styled.MainInner>
    </Styled.Main>
  );
}
