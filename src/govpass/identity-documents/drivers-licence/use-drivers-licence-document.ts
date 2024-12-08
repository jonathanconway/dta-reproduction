import { useIdentityDocuments } from "../use-identity-documents";
import { DriversLicenceDocument } from "./drivers-licence-document";

export function useDriversLicenceDocument() {
  const { data, updateDocument } = useIdentityDocuments();

  function update(document: Partial<DriversLicenceDocument>) {
    updateDocument({
      documentType: "driversLicenceDocument",
      document,
    });
  }

  const { driversLicenceDocument = {} } = data;

  return {
    driversLicenceDocument,
    update,
  };
}
