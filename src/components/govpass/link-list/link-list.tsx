import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
  readonly isDone: boolean;
}

export function LinkListItem({ children, href, isDone }: LinkListItemProps) {
  return (
    <Styled.LinkListItem isDone={isDone}>
      <Link to={href}>
        <Styled.LinkListItemMain>{children}</Styled.LinkListItemMain>

        {isDone ? <CheckCircleIcon /> : <ChevronRightIcon />}
      </Link>
    </Styled.LinkListItem>
  );
}
