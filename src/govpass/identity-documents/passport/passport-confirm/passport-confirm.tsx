import { useNavigate } from "react-router";
import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  ConfirmPanel,
  Heading,
  Link,
  LinkList,
} from "../../../../components";
import { paths } from "../../../../paths";
import { useIdentityDocuments } from "../../use-identity-documents";

export function PassportConfirm() {
  const navigate = useNavigate();

  const {
    data: {
      passportDocument: { passportNumber, familyName, givenNames, dateOfBirth },
    },
  } = useIdentityDocuments();

  const handleConfirmClick = () => {
    navigate(paths.govpass.identityDocuments.fullPath);
  };

  return (
    <>
      <Heading level={1}>Confirm your details</Heading>
      <Heading level={2}>Australian Passport</Heading>

      <LinkList>
        <ConfirmPanel
          titleSlot={<Heading level={3}>Passport number</Heading>}
          valueSlot={passportNumber}
          changeSlot={
            <Link to={paths.govpass.identityDocuments.passportNumber.fullPath}>
              Change
            </Link>
          }
        />
        <ConfirmPanel
          titleSlot={<Heading level={3}>Name</Heading>}
          valueSlot={`${givenNames} ${familyName}`}
          changeSlot={
            <Link to={paths.govpass.identityDocuments.passportDetails.fullPath}>
              Change
            </Link>
          }
        />
        <ConfirmPanel
          titleSlot={<Heading level={3}>Date of birth</Heading>}
          valueSlot={dateOfBirth}
          changeSlot={
            <Link to={paths.govpass.identityDocuments.passportDate.fullPath}>
              Change
            </Link>
          }
        />
      </LinkList>

      <div>
        <Button onClick={handleConfirmClick}>Confirm details</Button>
      </div>

      <Breadcrumbs>
        <Breadcrumb>
          <Link to={paths.govpass.identityDocuments.passportDetails.fullPath}>
            Back
          </Link>
        </Breadcrumb>
      </Breadcrumbs>
    </>
  );
}
