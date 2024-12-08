import { DocumentsSection, LinkList, LinkListItem } from "../../components";
import { DriversLicenceDocumentLink } from "./drivers-licence";
import { PassportDocumentLink } from "./passport";

export function IdentityDocuments() {
  return (
    <>
      <DocumentsSection
        title="Add your identity documents"
        remainingRequiredDocsCount={2}
      >
        <LinkList>
          <PassportDocumentLink />
          <DriversLicenceDocumentLink />

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
