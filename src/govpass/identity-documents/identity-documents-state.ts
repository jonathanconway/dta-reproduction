import { PassportDocument } from "./passport";

export type IdentityDocumentsState = {
  readonly passportDocument: Partial<PassportDocument>;
};

export const DEFAULT_IDENTITY_DOCUMENTS_STATE = {
  passportDocument: {},
};

export function isPassportDocumentCompleted(
  passportDocument?: Partial<PassportDocument>
) {
  return Boolean(
    passportDocument?.passportNumber &&
      passportDocument?.familyName &&
      passportDocument?.givenNames
  );
}
