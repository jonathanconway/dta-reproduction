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
import { passportFlow } from "../passport-flow";
import { usePassportDocument } from "../use-passport-document";

interface PassportNumberForm {
  readonly passportNumber?: string;
}

export function PassportNumber() {
  const navigate = useNavigate();

  const {
    update,
    passportDocument: { passportNumber },
  } = usePassportDocument();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as FormElement<PassportNumberForm>;
    const { elements } = form;

    update({
      passportNumber: elements.passportNumber.value,
    });

    navigate(passportFlow.passportNumber.next);
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
          alt="Diagram indicating date of birth as shown on passport"
          width="350px"
        />

        <Field
          labelSlot={
            <FieldLabel>
              Document <abbr title="number">No.</abbr>
            </FieldLabel>
          }
          tipSlot={<FieldTip>For example: M0992136</FieldTip>}
          inputSlot={
            <InputTextBox name="passportNumber" defaultValue={passportNumber} />
          }
        />

        <div>
          <Button>Next</Button>
        </div>
      </Form>
    </>
  );
}
