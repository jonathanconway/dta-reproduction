import type { Meta, StoryObj } from "@storybook/react";

import { PassportDate } from "../passport-date";

const meta = {
  title: "Screens/PassportDate",
  component: PassportDate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PassportDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
