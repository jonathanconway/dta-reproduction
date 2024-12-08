import { FormEvent } from "react";
import { useNavigate } from "react-router";
import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  Field,
  FieldLabel,
  FieldTip,
  Form,
  Heading,
  InputTextBox,
  Link,
} from "../../../../components";
import { paths } from "../../../../paths";
import { FormElement } from "../../../../utils";
import { useIdentityDocuments } from "../../use-identity-documents";
import { driversLicenceFlow } from "../drivers-licence-flow";

interface DriversLicenceDetailsForm {
  readonly givenNames: string;
  readonly familyName: string;
}

export function DriversLicenceDetails() {
  const navigate = useNavigate();

  const {
    updateDocument,
    data: {
      driversLicenceDocument: { familyName, givenNames, state },
    },
  } = useIdentityDocuments();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as FormElement<DriversLicenceDetailsForm>;
    const { elements } = form;

    updateDocument({
      documentType: "driversLicenceDocument",
      document: {
        givenNames: elements.givenNames.value,
        familyName: elements.familyName.value,
      },
    });

    navigate(driversLicenceFlow.driversLicenceDetails.next);
  };

  return (
    <>
      <Breadcrumbs>
        <Breadcrumb>
          <Link to={driversLicenceFlow.driversLicenceDetails.back}>Back</Link>
        </Breadcrumb>
      </Breadcrumbs>

      <Heading level={1}>Enter your driver licence details</Heading>

      <Form onSubmit={handleSubmit}>
        <img
          src={`${
            paths.govpass.identityDocuments.fullPath
          }/drivers-licence-${state?.toLowerCase()}-name.png`}
          alt="Diagram indicating date of birth as shown on passport"
          width="350px"
        />

        <Field
          labelSlot={<FieldLabel>Family name</FieldLabel>}
          tipSlot={
            <FieldTip>
              If you only have one name enter it here. For example: Chen
            </FieldTip>
          }
          inputSlot={
            <InputTextBox name="familyName" defaultValue={familyName} />
          }
        />

        <Field
          labelSlot={<FieldLabel>Given name(s)</FieldLabel>}
          tipSlot={<FieldTip>For example: Sam Frances</FieldTip>}
          inputSlot={
            <InputTextBox name="givenNames" defaultValue={givenNames} />
          }
        />

        <div>
          <Button>Next</Button>
        </div>
      </Form>
    </>
  );
}
