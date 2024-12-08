import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs } from "./breadcrumbs";
import { Breadcrumb } from "./breadcrumb";
import { Link } from "../link";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <Breadcrumbs>
        <Breadcrumb>
          <Link to="back">Back</Link>
        </Breadcrumb>
      </Breadcrumbs>
    ),
  },
};
