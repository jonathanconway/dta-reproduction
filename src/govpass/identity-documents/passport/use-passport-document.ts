import { PassportDocument } from "./passport-document";
import { useIdentityDocuments } from "../use-identity-documents";

export function usePassportDocument() {
  const { data, updateDocument } = useIdentityDocuments();

  function update(document: Partial<PassportDocument>) {
    updateDocument({
      documentType: "passportDocument",
      document,
    });
  }

  const { passportDocument = {} } = data;

  return {
    passportDocument,
    update,
  };
}
