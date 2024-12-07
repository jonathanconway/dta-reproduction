import { HTMLProps, ReactNode } from "react";
import * as Styled from "./field-tip.styles";

type FieldTipProps = HTMLProps<HTMLDivElement>;

export type FieldTipReactNode = ReactNode;

export function FieldTip(props: FieldTipProps) {
  return <Styled.FieldTip {...props} />;
}
