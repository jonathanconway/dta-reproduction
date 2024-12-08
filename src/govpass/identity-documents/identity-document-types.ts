import { TypeOfConst } from "../../utils";

export const IdentityDocumentTypes = {
  Passport: "passport",
} as const;

export type IdentityDocumentType = TypeOfConst<typeof IdentityDocumentTypes>;
