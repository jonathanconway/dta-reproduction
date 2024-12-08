import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  ConfirmPanel,
  Heading,
  Link,
  LinkList,
} from "../../../../components";
import { routes } from "../../../../routes";
import { GovPassLayout } from "../../../govpass-layout";

export function PassportConfirm() {
  return (
    <GovPassLayout>
      <Heading level={1}>Confirm your details</Heading>
      <Heading level={2}>Australian Passport</Heading>

      <LinkList>
        <ConfirmPanel
          titleSlot={<Heading level={3}>Passport number</Heading>}
          valueSlot="M0998532"
          changeSlot={
            <Link to={routes.govpass.identityDocuments.passportDetails.index}>
              Change
            </Link>
          }
        />
        <ConfirmPanel
          titleSlot={<Heading level={3}>Name</Heading>}
          valueSlot="Chen Sam Francis"
          changeSlot={
            <Link to={routes.govpass.identityDocuments.passportDetails.index}>
              Change
            </Link>
          }
        />
        <ConfirmPanel
          titleSlot={<Heading level={3}>Date of birth</Heading>}
          valueSlot="24 / 03 / 78"
          changeSlot={
            <Link to={routes.govpass.identityDocuments.passportDetails.index}>
              Change
            </Link>
          }
        />
      </LinkList>

      <div>
        <Button>Confirm details</Button>
      </div>

      <Breadcrumbs>
        <Breadcrumb>
          <Link to={routes.govpass.identityDocuments.passportDetails.index}>
            Back
          </Link>
        </Breadcrumb>
      </Breadcrumbs>
    </GovPassLayout>
  );
}
