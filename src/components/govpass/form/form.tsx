import { HTMLProps } from "react";

import * as Styled from "./form.styles";

type FormProps = HTMLProps<HTMLFormElement>;

export function Form(props: FormProps) {
  return <Styled.Form {...props} />;
}
