export type FormElements<T> = HTMLFormControlsCollection &
  Record<keyof T, { readonly value: string }>;
