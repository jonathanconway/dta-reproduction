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
import { passportFlow } from "../passport-flow";

interface PassportDateForm {
  readonly dateOfBirth?: string;
}

export function PassportDate() {
  const navigate = useNavigate();

  const {
    updateDocument,
    data: {
      passportDocument: { dateOfBirth },
    },
  } = useIdentityDocuments();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as FormElement<PassportDateForm>;
    const { elements } = form;

    updateDocument({
      documentType: "passportDocument",
      document: {
        dateOfBirth: elements.dateOfBirth.value,
      },
    });

    navigate(passportFlow.passportDate.next);
  };

  return (
    <>
      <Breadcrumbs>
        <Breadcrumb>
          <Link to={paths.govpass.identityDocuments.fullPath}>Back</Link>
        </Breadcrumb>
      </Breadcrumbs>

      <Heading level={1}>Enter your passport number</Heading>

      <Form onSubmit={handleSubmit}>
        <img
          src={`${paths.govpass.identityDocuments.passportDate.fullPath}.png`}
          alt="Diagram indicating doc no. as shown on passport"
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
