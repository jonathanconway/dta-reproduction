import * as Styles from "./state-picker.styles";
import { States } from "./states";

interface StatePickerProps {
  readonly name: string;
  readonly defaultValue?: string;
}

export function StatePicker(props: StatePickerProps) {
  return (
    <Styles.Container>
      {Object.keys(States).map((state) => (
        <Styles.StateOptionLabel key={state}>
          {state}
          <Styles.StateOption
            type="radio"
            name={props.name}
            value={state}
            defaultChecked={props.defaultValue === state}
          />
        </Styles.StateOptionLabel>
      ))}
    </Styles.Container>
  );
}
