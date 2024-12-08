import { PassportDocument } from "./passport-document";

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
      passportDocument?.givenNames &&
      passportDocument?.dateOfBirth
  );
}
