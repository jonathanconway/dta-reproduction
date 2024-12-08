import type { Meta, StoryObj } from "@storybook/react";

import { PassportDetails } from "../passport-details";

const meta = {
  title: "Screens/PassportDetails",
  component: PassportDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PassportDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
