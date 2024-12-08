import { DriversLicenceDocument } from "./drivers-licence/drivers-licence-document";
import { PassportDocument } from "./passport/passport-document";

export interface IdentityDocumentsState {
  readonly passportDocument: Partial<PassportDocument>;
  readonly driversLicenceDocument: Partial<DriversLicenceDocument>;
}

export const DEFAULT_IDENTITY_DOCUMENTS_STATE = {
  passportDocument: {},
  driversLicenceDocument: {},
};
