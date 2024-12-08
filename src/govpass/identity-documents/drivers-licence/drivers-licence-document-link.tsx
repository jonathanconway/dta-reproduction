import { LinkListItem } from "../../../components";
import { useIdentityDocuments } from "../use-identity-documents";
import { isDriversLicenceDocumentCompleted } from "./drivers-licence-document-completed";
import { driversLicenceFlow } from "./drivers-licence-flow";

export function DriversLicenceDocumentLink() {
  const {
    data: { driversLicenceDocument },
  } = useIdentityDocuments();

  return (
    <LinkListItem
      href={driversLicenceFlow.initial}
      isDone={isDriversLicenceDocumentCompleted(driversLicenceDocument)}
    >
      Driver's licence
    </LinkListItem>
  );
}
