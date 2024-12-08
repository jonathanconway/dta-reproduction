import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../heading";
import { Link } from "../link";
import { ConfirmPanel } from "./confirm-panel";

const meta = {
  title: "Components/ConfirmPanel",
  component: ConfirmPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ConfirmPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    titleSlot: <Heading level={3}>State</Heading>,
    valueSlot: <>NSW</>,
    changeSlot: <Link to="/state">Change</Link>,
  },
};
