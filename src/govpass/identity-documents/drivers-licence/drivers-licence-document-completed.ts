import { DriversLicenceDocument } from "./drivers-licence-document";

export function isDriversLicenceDocumentCompleted(
  driversLicenceDocument?: Partial<DriversLicenceDocument>
) {
  return Boolean(
    driversLicenceDocument?.number &&
      driversLicenceDocument?.state &&
      driversLicenceDocument?.familyName &&
      driversLicenceDocument?.givenNames &&
      driversLicenceDocument?.dateOfBirth
  );
}
