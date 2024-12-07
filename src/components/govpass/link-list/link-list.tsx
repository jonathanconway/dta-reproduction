import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ReactNode } from "react";

import * as Styled from "./link-list.styles";
import { Link } from "react-router";

interface LinkListProps {
  readonly children: ReactNode;
}

export function LinkList({ children }: LinkListProps) {
  return <Styled.LinkList>{children}</Styled.LinkList>;
}

interface LinkListItemProps {
  readonly children: ReactNode;
  readonly href: string;
}

export function LinkListItem({ children, href }: LinkListItemProps) {
  return (
    <Styled.LinkListItem>
      <Link to={href}>
        <Styled.LinkListItemMain>{children}</Styled.LinkListItemMain>
        <ChevronRightIcon />
      </Link>
    </Styled.LinkListItem>
  );
}
