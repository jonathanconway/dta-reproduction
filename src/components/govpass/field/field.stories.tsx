import type { Meta, StoryObj } from "@storybook/react";

import { LinkList, LinkListItem } from "../link-list";
import { Field } from "./field";
import { FieldLabel } from "./field-label";
import { InputTextBox } from "../input-textbox";
import { FieldTip } from "./field-tip";

const meta = {
  title: "Components/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    labelSlot: <FieldLabel>Label</FieldLabel>,
    tipSlot: <FieldTip>Tip</FieldTip>,
    inputSlot: <InputTextBox />,
  },
};
