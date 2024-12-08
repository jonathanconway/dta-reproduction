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

export function DriversLicenceConfirm() {
  const navigate = useNavigate();

  const {
    data: {
      driversLicenceDocument: {
        state,
        number,
        familyName,
        givenNames,
        dateOfBirth,
      },
    },
  } = useIdentityDocuments();

  const handleConfirmClick = () => {
    navigate(paths.govpass.identityDocuments.fullPath);
  };

  return (
    <>
      <Heading level={1}>Confirm your details</Heading>
      <Heading level={2}>Driver Licence</Heading>

      <LinkList>
        <ConfirmPanel
          titleSlot={<Heading level={3}>State</Heading>}
          valueSlot={state}
          changeSlot={
            <Link
              to={paths.govpass.identityDocuments.driversLicenceState.fullPath}
            >
              Change
            </Link>
          }
        />
        <ConfirmPanel
          titleSlot={<Heading level={3}>Licence number</Heading>}
          valueSlot={number}
          changeSlot={
            <Link
              to={paths.govpass.identityDocuments.driversLicenceNumber.fullPath}
            >
              Change
            </Link>
          }
        />
        <ConfirmPanel
          titleSlot={<Heading level={3}>Name</Heading>}
          valueSlot={`${givenNames} ${familyName}`}
          changeSlot={
            <Link
              to={
                paths.govpass.identityDocuments.driversLicenceDetails.fullPath
              }
            >
              Change
            </Link>
          }
        />
        <ConfirmPanel
          titleSlot={<Heading level={3}>Date of birth</Heading>}
          valueSlot={dateOfBirth}
          changeSlot={
            <Link
              to={paths.govpass.identityDocuments.driversLicenceDate.fullPath}
            >
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
          <Link
            to={paths.govpass.identityDocuments.driversLicenceDate.fullPath}
          >
            Back
          </Link>
        </Breadcrumb>
      </Breadcrumbs>
    </>
  );
}
