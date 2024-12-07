import { Link as ReactRouterLink } from "react-router";

import * as Styled from "./link.styles";

type LinkProps = Parameters<typeof ReactRouterLink>[0];

export function Link(props: LinkProps) {
  return (
    <Styled.Link>
      <ReactRouterLink className="" {...props} />
    </Styled.Link>
  );
}
