import { GovPassLayout } from "./govpass-layout";
import { IdentityDocuments } from "./identity-documents";

export const govPassPath = "/govpass";

export function GovPass() {
  return (
    <GovPassLayout>
      <IdentityDocuments />
    </GovPassLayout>
  );
}
