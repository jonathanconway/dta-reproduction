import type { Meta, StoryObj } from "@storybook/react";

import { PassportNumber } from "../passport-number";

const meta = {
  title: "Screens/PassportNumber",
  component: PassportNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PassportNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
