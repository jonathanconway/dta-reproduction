import { ReactNode } from "react";
import * as Styled from "./breadcrumbs.styles";

interface BreadcrumbsProps {
  readonly children: ReactNode;
}

export function Breadcrumbs({ children }: BreadcrumbsProps) {
  return <Styled.Breadcrumbs>{children}</Styled.Breadcrumbs>;
}
