import { ReactNode } from "react";
import * as Styled from "./documents-section.styles";
import { Heading } from "../heading";

interface DocumentsSectionProps {
  readonly children: ReactNode;
  readonly title: string;
  readonly remainingRequiredDocsCount?: number;
}

export function DocumentsSection({
  children,
  title,
  remainingRequiredDocsCount,
}: DocumentsSectionProps) {
  return (
    <Styled.DocumentsSection>
      <Styled.DocumentsSectionHeader>
        <Heading level={2}>{title}</Heading>

        <Styled.DocumentsSectionRemaining>
          Add {remainingRequiredDocsCount}
        </Styled.DocumentsSectionRemaining>
      </Styled.DocumentsSectionHeader>

      <Styled.DocumentsSectionMain>{children}</Styled.DocumentsSectionMain>
    </Styled.DocumentsSection>
  );
}
