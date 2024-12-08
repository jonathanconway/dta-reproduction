import { LinkListItem } from "../../../components";
import { paths } from "../../../paths";
import { useIdentityDocuments } from "../use-identity-documents";
import { isPassportDocumentCompleted } from "./passport-document-completed";

export function PassportDocumentLink() {
  const {
    data: { passportDocument },
  } = useIdentityDocuments();

  return (
    <LinkListItem
      href={paths.govpass.identityDocuments.passportNumber.fullPath}
      isDone={isPassportDocumentCompleted(passportDocument)}
    >
      Australian passport
    </LinkListItem>
  );
}
