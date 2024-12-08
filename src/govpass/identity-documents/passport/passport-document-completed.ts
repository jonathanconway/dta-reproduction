import { PassportDocument } from "./passport-document";

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
