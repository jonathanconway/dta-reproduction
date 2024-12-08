import type { Meta, StoryObj } from "@storybook/react";

import { LinkList, LinkListItem } from "../link-list";
import { DocumentsSection } from "./documents-section";

const meta = {
  title: "Components/DocumentsSection",
  component: DocumentsSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DocumentsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title",
    children: (
      <LinkList>
        <LinkListItem href="" isDone>
          Passport
        </LinkListItem>

        <LinkListItem href="" isDone={false}>
          Driver's licence
        </LinkListItem>
      </LinkList>
    ),
    remainingRequiredDocsCount: 3,
  },
};
