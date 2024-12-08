import { FormElements } from "./form-elements";

export type FormElement<T> = HTMLFormElement & {
  readonly elements: FormElements<T>;
};
