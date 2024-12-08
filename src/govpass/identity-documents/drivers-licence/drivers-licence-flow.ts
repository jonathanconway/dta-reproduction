import { paths } from "../../../paths";

export const driversLicenceFlow = {
  initial: paths.govpass.identityDocuments.driversLicenceState.fullPath,
  driversLicenceState: {
    back: undefined,
    next: paths.govpass.identityDocuments.driversLicenceNumber.fullPath,
  },
  driversLicenceNumber: {
    back: paths.govpass.identityDocuments.driversLicenceState.fullPath,
    next: paths.govpass.identityDocuments.driversLicenceDetails.fullPath,
  },
  driversLicenceDetails: {
    back: paths.govpass.identityDocuments.driversLicenceNumber.fullPath,
    next: paths.govpass.identityDocuments.driversLicenceDate.fullPath,
  },
  driversLicenceDate: {
    back: paths.govpass.identityDocuments.driversLicenceDetails.fullPath,
    next: paths.govpass.identityDocuments.driversLicenceConfirm.fullPath,
  },
  driversLicenceConfirm: {
    back: paths.govpass.identityDocuments.driversLicenceDate.fullPath,
    next: undefined,
  },
};
