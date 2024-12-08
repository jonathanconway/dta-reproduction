import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../query-client";
import {
  DEFAULT_IDENTITY_DOCUMENTS_STATE,
  IdentityDocumentsState,
} from "./identity-documents-state";

const IDENTITY_DOCUMENTS_QUERY_KEY = "identity-documents";

export function useIdentityDocuments() {
  const { data } = useQuery<IdentityDocumentsState>(
    [IDENTITY_DOCUMENTS_QUERY_KEY],
    () => DEFAULT_IDENTITY_DOCUMENTS_STATE,
    {
      initialData: DEFAULT_IDENTITY_DOCUMENTS_STATE,
    }
  );

  function updateDocument({
    documentType,
    document,
  }: {
    documentType: keyof IdentityDocumentsState;
    document: IdentityDocumentsState[keyof IdentityDocumentsState];
  }) {
    queryClient.setQueryData(
      [IDENTITY_DOCUMENTS_QUERY_KEY],
      (
        previousData: IdentityDocumentsState = DEFAULT_IDENTITY_DOCUMENTS_STATE
      ) => ({
        ...previousData,
        [documentType]: document,
      })
    );
  }

  return {
    data,
    updateDocument,
  };
}
