import { TypeOfConst } from "../../../utils";

export const States = {
  ACT: "ACT",
  NSW: "NSW",
  NT: "NT",
  QLD: "QLD",
  SA: "SA",
  TAS: "TAS",
  VIC: "VIC",
  WA: "WA",
};

export type State = TypeOfConst<typeof States>;
