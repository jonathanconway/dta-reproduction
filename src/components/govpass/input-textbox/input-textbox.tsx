import { HTMLProps } from "react";

import * as Styled from "./input-textbox.styles";

type InputTextBoxProps = HTMLProps<HTMLInputElement>;

export function InputTextBox(props: InputTextBoxProps) {
  return <Styled.Input {...props} />;
}
