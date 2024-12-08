import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ButtonLink } from "./button-link";

const meta = {
  title: "Components/ButtonLink",
  component: ButtonLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    to: "link",
    children: "ButtonLink",
  },
};
