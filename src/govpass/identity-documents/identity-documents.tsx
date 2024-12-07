import { DocumentsSection, LinkList, LinkListItem } from "../../components";
import { routes } from "../../routes";

export function IdentityDocuments() {
  return (
    <>
      <DocumentsSection
        title="Add your identity documents"
        remainingRequiredDocsCount={2}
      >
        <LinkList>
          <LinkListItem
            href={routes.govpass.identityDocuments.passportDetails.index}
            isDone
          >
            Australian passport
          </LinkListItem>
          <LinkListItem href="" isDone={false}>
            Driver's licence
          </LinkListItem>
          <LinkListItem href="" isDone={false}>
            Citizenship certificate
          </LinkListItem>
          <LinkListItem href="" isDone={false}>
            ImmiCard
          </LinkListItem>
          <LinkListItem href="" isDone={false}>
            Visa grant letter
          </LinkListItem>
          <LinkListItem href="" isDone={false}>
            Birth certificate
          </LinkListItem>
        </LinkList>
      </DocumentsSection>

      <DocumentsSection
        title="Add a secondary document"
        remainingRequiredDocsCount={1}
      >
        <LinkList>
          <LinkListItem href="" isDone={false}>
            Medicare card
          </LinkListItem>
          <LinkListItem href="" isDone={false}>
            Change of name certificate
          </LinkListItem>
          <LinkListItem href="" isDone={false}>
            Marriage certificate
          </LinkListItem>
        </LinkList>
      </DocumentsSection>
    </>
  );
}
