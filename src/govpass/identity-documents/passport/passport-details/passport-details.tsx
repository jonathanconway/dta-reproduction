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
import { routes } from "../../../../routes";
import { FormElement } from "../../../../utils";
import { GovPassLayout } from "../../../govpass-layout";
import { useIdentityDocuments } from "../../use-identity-documents";

interface PassportDetailsForm {
  readonly givenNames: string;
  readonly familyName: string;
}

export function PassportDetails() {
  const navigate = useNavigate();

  const {
    updateDocument,
    data: {
      passportDocument: { familyName, givenNames },
    },
  } = useIdentityDocuments();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as FormElement<PassportDetailsForm>;
    const { elements } = form;

    updateDocument({
      documentType: "passportDocument",
      document: {
        givenNames: elements.givenNames.value,
        familyName: elements.familyName.value,
      },
    });

    navigate(routes.govpass.identityDocuments.passportConfirm.index);
  };

  return (
    <GovPassLayout>
      <Breadcrumbs>
        <Breadcrumb>
          <Link to="/govpass">Back</Link>
        </Breadcrumb>
      </Breadcrumbs>

      <Heading level={1}>Enter your passport details</Heading>

      <Form onSubmit={handleSubmit}>
        <img
          src={`${routes.govpass.identityDocuments.passportDetails.index}.png`}
          alt="Diagram indicating name as shown on passport"
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
    </GovPassLayout>
  );
}
