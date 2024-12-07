export const routes = {
  switchboard: "/",

  govpass: {
    index: "/govpass",

    identityDocuments: {
      index: "/govpass/identity-documents",

      passportDetails: {
        index: "/govpass/identity-documents/passport-details",
      },

      passportConfirm: {
        index: "/govpass/identity-documents/passport-confirm",
      },
    },
  },
};
