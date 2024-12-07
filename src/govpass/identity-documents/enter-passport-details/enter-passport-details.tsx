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
} from "../../../components";
import { GovPassLayout } from "../../govpass-layout";

export const enterPassportDetailsPath =
  "/govpass/identity-documents/enter-passport-details";

export function EnterPassportDetails() {
  return (
    <GovPassLayout>
      <Breadcrumbs>
        <Breadcrumb>
          <Link to="/govpass">Back</Link>
        </Breadcrumb>
      </Breadcrumbs>

      <Heading level={1}>Enter your passport details</Heading>

      <Form>
        <img
          src="/govpass/identity-documents/enter-passport-details.png"
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
          inputSlot={<InputTextBox />}
        />

        <Field
          labelSlot={<FieldLabel>Given name(s)</FieldLabel>}
          tipSlot={<FieldTip>For example: Sam Frances</FieldTip>}
          inputSlot={<InputTextBox />}
        />

        <div>
          <Button>Next</Button>
        </div>
      </Form>
    </GovPassLayout>
  );
}
