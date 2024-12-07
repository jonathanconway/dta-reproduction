import { DocumentsSection, LinkList, LinkListItem } from "../../components";

export function IdentityDocuments() {
  return (
    <>
      <DocumentsSection
        title="Add your identity documents"
        remainingRequiredDocsCount={2}
      >
        <LinkList>
          <LinkListItem href="/govpass/identity-documents/enter-passport-details">
            Australian passport
          </LinkListItem>
          <LinkListItem href="">Driver's licence</LinkListItem>
          <LinkListItem href="">Citizenship certificate</LinkListItem>
          <LinkListItem href="">ImmiCard</LinkListItem>
          <LinkListItem href="">Visa grant letter</LinkListItem>
          <LinkListItem href="">Birth certificate</LinkListItem>
        </LinkList>
      </DocumentsSection>

      <DocumentsSection
        title="Add a secondary document"
        remainingRequiredDocsCount={1}
      >
        <LinkList>
          <LinkListItem href="">Medicare card</LinkListItem>
          <LinkListItem href="">Change of name certificate</LinkListItem>
          <LinkListItem href="">Marriage certificate</LinkListItem>
        </LinkList>
      </DocumentsSection>
    </>
  );
}
