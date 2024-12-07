import { ReactNode } from "react";

import * as Styled from "./confirm-panel.styles";

interface ConfirmPanelProps {
  readonly titleSlot: ReactNode;
  readonly valueSlot: ReactNode;
  readonly changeSlot: ReactNode;
}

export function ConfirmPanel({
  titleSlot,
  valueSlot,
  changeSlot,
}: ConfirmPanelProps) {
  return (
    <Styled.ConfirmPanel>
      <Styled.Main>
        <Styled.TitleContainer>{titleSlot}</Styled.TitleContainer>
        <Styled.ValueContainer>{valueSlot}</Styled.ValueContainer>
      </Styled.Main>
      <Styled.Actions>{changeSlot}</Styled.Actions>
    </Styled.ConfirmPanel>
  );
}
