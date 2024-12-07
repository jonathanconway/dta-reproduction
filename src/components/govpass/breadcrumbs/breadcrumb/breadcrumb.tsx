import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ReactNode } from "react";
import * as Styled from "./breadcrumb.styles";

interface BreadcrumbProps {
  readonly children: ReactNode;
}

export function Breadcrumb({ children }: BreadcrumbProps) {
  return (
    <Styled.Breadcrumb>
      <ChevronLeftIcon height={12} />

      {children}
    </Styled.Breadcrumb>
  );
}
