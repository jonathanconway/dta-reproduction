import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PassportDocument } from "./passport";
import { IdentityDocumentsState } from "./identity-documents-state";

const IDENTITY_DOCUMENTS_QUERY_KEY = "identity-documents";

export function useIdentityDocuments() {
  const { data } = useQuery([IDENTITY_DOCUMENTS_QUERY_KEY]);
  const { setQueryData } = useQueryClient();

  function addPassport(passportDocument: PassportDocument) {
    setQueryData(
      [IDENTITY_DOCUMENTS_QUERY_KEY],
      (previousData: IdentityDocumentsState = {}) => ({
        ...previousData,
        passportDocument,
      })
    );
  }

  return {
    data,
    addPassport,
  };
}
