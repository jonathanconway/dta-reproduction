import type { Meta, StoryObj } from "@storybook/react";

import { IdentityDocuments } from "../identity-documents";

const meta = {
  title: "Screens/IdentityDocuments",
  component: IdentityDocuments,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof IdentityDocuments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
