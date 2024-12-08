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

interface DriversLicenceDateForm {
  readonly dateOfBirth?: string;
}

export function DriversLicenceDate() {
  const navigate = useNavigate();

  const {
    updateDocument,
    data: {
      driversLicenceDocument: { dateOfBirth, state },
    },
  } = useIdentityDocuments();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as FormElement<DriversLicenceDateForm>;
    const { elements } = form;

    updateDocument({
      documentType: "driversLicenceDocument",
      document: {
        dateOfBirth: elements.dateOfBirth.value,
      },
    });

    navigate(driversLicenceFlow.driversLicenceDate.next);
  };

  return (
    <>
      <Breadcrumbs>
        <Breadcrumb>
          <Link to={driversLicenceFlow.driversLicenceDate.back}>Back</Link>
        </Breadcrumb>
      </Breadcrumbs>

      <Heading level={1}>Enter your driver licence date</Heading>

      <Form onSubmit={handleSubmit}>
        <img
          src={`${
            paths.govpass.identityDocuments.fullPath
          }/drivers-licence-${state?.toLowerCase()}-dob.png`}
          alt="Diagram indicating date as shown on passport"
          width="350px"
        />

        <Field
          labelSlot={<FieldLabel>Date of birth</FieldLabel>}
          tipSlot={<FieldTip>For example: 20 03 1976</FieldTip>}
          inputSlot={
            <InputTextBox name="dateOfBirth" defaultValue={dateOfBirth} />
          }
        />

        <div>
          <Button>Next</Button>
        </div>
      </Form>
    </>
  );
}
