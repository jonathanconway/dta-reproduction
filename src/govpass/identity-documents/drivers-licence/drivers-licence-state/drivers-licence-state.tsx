import { FormEvent } from "react";
import { useNavigate } from "react-router";
import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  Field,
  FieldLabel,
  Form,
  Heading,
  Link,
  StatePicker,
} from "../../../../components";
import { paths } from "../../../../paths";
import { FormElement } from "../../../../utils";
import { driversLicenceFlow } from "../drivers-licence-flow";
import { useDriversLicenceDocument } from "../use-drivers-licence-document";

interface DriversLicenceStateForm {
  readonly state?: string;
}

export function DriversLicenceState() {
  const navigate = useNavigate();

  const {
    update,
    driversLicenceDocument: { state },
  } = useDriversLicenceDocument();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as FormElement<DriversLicenceStateForm>;
    const { elements } = form;

    update({
      state: elements.state.value,
    });

    navigate(driversLicenceFlow.driversLicenceState.next);
  };

  return (
    <>
      <Heading level={1}>Enter your driver licence details</Heading>

      <Form onSubmit={handleSubmit}>
        <Field
          labelSlot={<FieldLabel>Issuing state or territory</FieldLabel>}
          inputSlot={<StatePicker name="state" defaultValue={state} />}
        />

        <div>
          <Button>Next</Button>
        </div>
      </Form>

      <Breadcrumbs>
        <Breadcrumb>
          <Link to={paths.govpass.identityDocuments.fullPath}>Back</Link>
        </Breadcrumb>
      </Breadcrumbs>
    </>
  );
}
