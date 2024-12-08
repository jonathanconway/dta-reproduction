import type { Meta, StoryObj } from "@storybook/react";

import { PassportConfirm } from "../passport-confirm";

const meta = {
  title: "Screens/PassportConfirm",
  component: PassportConfirm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PassportConfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
