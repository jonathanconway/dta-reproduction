import { ButtonHTMLAttributes } from "react";
import * as Styled from "./button.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return <Styled.Button type={props.type!} {...props} />;
}
