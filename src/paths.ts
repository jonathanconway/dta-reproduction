import { generatePaths } from "./utils";

const pathsDefinition = {
  govpass: {
    identityDocuments: {
      passportNumber: {},
      passportDetails: {},
      passportDate: {},
      passportConfirm: {},

      driversLicenceState: {},
      driversLicenceNumber: {},
      driversLicenceDetails: {},
      driversLicenceDate: {},
      driversLicenceConfirm: {},
    },
  },
};

export const paths = generatePaths(pathsDefinition);
