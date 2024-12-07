import { HTMLProps, ReactNode } from "react";

import * as Styled from "./field.styles";
import { FieldLabelReactNode } from "./field-label";
import { FieldTipReactNode } from "./field-tip";

type FieldProps = HTMLProps<HTMLDivElement> & {
  readonly labelSlot: FieldLabelReactNode;
  readonly tipSlot?: FieldTipReactNode;
  readonly inputSlot: ReactNode;
};

export function Field(props: FieldProps) {
  const { labelSlot, tipSlot, inputSlot, ...restProps } = props;

  return (
    <Styled.Field {...restProps}>
      <Styled.FieldLabelAndTip>
        {labelSlot}
        {tipSlot}
      </Styled.FieldLabelAndTip>
      {inputSlot}
    </Styled.Field>
  );
}
