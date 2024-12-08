import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../query-client";
import {
  DEFAULT_IDENTITY_DOCUMENTS_STATE,
  IdentityDocumentsState,
} from "./identity-documents-state";
import { getLocalStorage, setLocalStorage } from "../../utils";

const IDENTITY_DOCUMENTS_QUERY_KEY = "identity-documents";

export function useIdentityDocuments() {
  const initialData =
    getLocalStorage<IdentityDocumentsState>(IDENTITY_DOCUMENTS_QUERY_KEY) ??
    DEFAULT_IDENTITY_DOCUMENTS_STATE;

  const { data } = useQuery<IdentityDocumentsState>(
    [IDENTITY_DOCUMENTS_QUERY_KEY],
    () => initialData,
    {
      initialData,
      refetchOnMount: false,
      refetchInterval: Infinity,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      cacheTime: Infinity,
    }
  );

  function updateDocument({
    documentType,
    document,
  }: {
    documentType: keyof IdentityDocumentsState;
    document: IdentityDocumentsState[keyof IdentityDocumentsState];
  }) {
    const newData = queryClient.setQueryData(
      [IDENTITY_DOCUMENTS_QUERY_KEY],
      (
        previousData: IdentityDocumentsState = DEFAULT_IDENTITY_DOCUMENTS_STATE
      ) => ({
        ...previousData,
        [documentType]: {
          ...previousData[documentType],
          ...document,
        },
      })
    );
    setLocalStorage(IDENTITY_DOCUMENTS_QUERY_KEY, newData);
  }

  return {
    data,
    updateDocument,
  };
}
