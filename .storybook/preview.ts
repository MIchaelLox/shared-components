import type { Preview } from "@storybook/react";

// ✅ Load your global styles (Tailwind)
import "../src/index.css"; // or "./preview.css" if you prefer that file

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
