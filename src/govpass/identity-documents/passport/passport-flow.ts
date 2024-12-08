import { paths } from "../../../paths";

export const passportFlow = {
  passportNumber: {
    back: undefined,
    next: paths.govpass.identityDocuments.passportDetails.fullPath,
  },
  passportDetails: {
    back: paths.govpass.identityDocuments.passportNumber.fullPath,
    next: paths.govpass.identityDocuments.passportDate.fullPath,
  },
  passportDate: {
    back: paths.govpass.identityDocuments.passportDetails.fullPath,
    next: paths.govpass.identityDocuments.passportConfirm.fullPath,
  },
  passportConfirm: {
    back: paths.govpass.identityDocuments.passportDate.fullPath,
    next: undefined,
  },
};
