import { generatePaths } from "./utils";

const pathsDefinition = {
  govpass: {
    identityDocuments: {
      passportNumber: {},
      passportDetails: {},
      passportDate: {},
      passportConfirm: {},
    },
  },
};

export const paths = generatePaths(pathsDefinition);
