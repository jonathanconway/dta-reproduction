import { ReactNode } from "react";

import * as Styled from "./field-label.styles";

interface FieldLabelProps {
  readonly children: ReactNode;
}

export type FieldLabelReactNode = ReturnType<typeof FieldLabel>;

export function FieldLabel(props: FieldLabelProps) {
  return <Styled.FieldLabel>{props.children}</Styled.FieldLabel>;
}
