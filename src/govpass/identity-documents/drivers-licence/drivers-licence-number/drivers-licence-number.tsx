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
import { driversLicenceFlow } from "../drivers-licence-flow";
import { useDriversLicenceDocument } from "../use-drivers-licence-document";

interface DriversLicenceNumberForm {
  readonly number?: string;
}

export function DriversLicenceNumber() {
  const navigate = useNavigate();

  const {
    update,
    driversLicenceDocument: { number, state },
  } = useDriversLicenceDocument();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as FormElement<DriversLicenceNumberForm>;
    const { elements } = form;

    update({
      number: elements.number.value,
    });

    navigate(driversLicenceFlow.driversLicenceNumber.next);
  };

  return (
    <>
      <Breadcrumbs>
        <Breadcrumb>
          <Link to={driversLicenceFlow.driversLicenceNumber.back}>Back</Link>
        </Breadcrumb>
      </Breadcrumbs>

      <Heading level={1}>Enter your driver licence number</Heading>

      <Form onSubmit={handleSubmit}>
        <img
          src={`${
            paths.govpass.identityDocuments.fullPath
          }/drivers-licence-${state?.toLowerCase()}-licence-number.png`}
          alt="Diagram indicating date of birth as shown on passport"
          width="350px"
        />

        <Field
          labelSlot={<FieldLabel>Licence number</FieldLabel>}
          tipSlot={<FieldTip>For example: 6442SY76</FieldTip>}
          inputSlot={<InputTextBox name="number" defaultValue={number} />}
        />

        <div>
          <Button>Next</Button>
        </div>
      </Form>
    </>
  );
}
