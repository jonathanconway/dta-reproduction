import { Link as ReactRouterLink } from "react-router";
import * as Styled from "./button-link.styles";

type ButtonLinkProps = Parameters<typeof ReactRouterLink>[0];

export function ButtonLink(props: ButtonLinkProps) {
  return <Styled.ButtonLink {...props} />;
}
