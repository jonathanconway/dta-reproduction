import type { Preview } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";

import "../src/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../src/query-client";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => <MemoryRouter>{Story()}</MemoryRouter>,
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
};

export default preview;
