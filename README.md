# Shared Components Library

Reusable UI components for internship projects, built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Vitest**, and **Storybook**.

This repository is intended to be a shared design system that other front-end apps can consume (for example: internal dashboards, simulators, or documentation sites).

---

## Tech Stack

- **React 18 + TypeScript**
- **Vite** (build tool & dev server)
- **Tailwind CSS** (utility-first styling)
- **Vitest + @testing-library/react** (unit & component tests)
- **Storybook 10 (react-vite)** (interactive documentation)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
### 2. Run the component library in dev mode
bash
Copy code
npm run dev
Vite dev server: http://localhost:5173

### 3. Run Storybook (component documentation)
bash
Copy code
npm run storybook
Storybook: http://localhost:6006

### 4. Run tests
bash
Copy code
npm test
Uses Vitest.

Global test setup lives in src/setupTests.ts.

Tests are in src/__tests__.

Project Structure
text
Copy code
shared-components/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Button.tsx
│  │  └─ ThemeToggle.tsx
│  ├─ stories/
│  │  ├─ Button.stories.tsx
│  │  └─ ThemeToggle.stories.tsx
│  ├─ __tests__/
│  │  ├─ Button.test.tsx
│  │  ├─ ThemeToggle.test.tsx
│  │  └─ api.test.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  └─ setupTests.ts
├─ .storybook/
│  ├─ main.ts
│  ├─ preview.ts
│  └─ vitest.setup.ts
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.ts
└─ package.json
Available NPM Scripts
jsonc
Copy code
// package.json (important scripts)
"scripts": {
  "dev": "vite",                 // run dev server
  "build": "vite build",         // build library / app
  "preview": "vite preview",     // preview production build
  "test": "vitest",              // run unit/component tests
  "lint": "eslint .",            // run eslint (if configured)
  "storybook": "storybook dev",  // run Storybook
  "build-storybook": "storybook build"
}
Implemented Components
<Button />
A reusable button component with variants.

File: src/components/Button.tsx
Story: src/stories/Button.stories.tsx

Props (basic):

children: ReactNode – label/content of the button.

variant: "primary" | "secondary" – visual style.

className?: string – extra Tailwind classes.

disabled?: boolean – disabled state.

onClick?: () => void – click handler.

Usage:

tsx
Copy code
import { Button } from "./components/Button";

<Button variant="primary">Primary Button</Button>;
<Button variant="secondary" disabled>
  Secondary Disabled
</Button>;
<ThemeToggle />
Simple light/dark theme switcher used as a shared control.

File: src/components/ThemeToggle.tsx
Story: src/stories/ThemeToggle.stories.tsx

Props:

initialTheme?: "light" | "dark" – starting theme (default: "light").

The component manages internal state and shows the current theme in the label.

tsx
Copy code
import { ThemeToggle } from "./components/ThemeToggle";

<ThemeToggle initialTheme="light" />;
Testing
All tests are located in src/__tests__.

Testing stack:

vitest

@testing-library/react

@testing-library/jest-dom

To run tests in watch mode:

bash
Copy code
npm test
Current coverage:

Button renders correctly and responds to props/events.

ThemeToggle toggles between light/dark.

api.test.ts verifies a simple example API helper (placeholder for future shared utilities).

Storybook Documentation
Storybook is used to document and visually test components.

Default stories for:

Button (Primary, Secondary, Disabled variants)

ThemeToggle (light/dark initial states)

Run Storybook:

bash
Copy code
npm run storybook
Relation to Internship Issues (#1–#15)
This implementation covers:

Project scaffold – Vite + React + TypeScript base app.

Component boilerplate – src/components structure.

Core UI components – Button, ThemeToggle.

Styling system – Tailwind CSS integrated into Vite.

Testing setup – Vitest + Testing Library + global setup file.

Jest/RTL tests – basic tests for Button and ThemeToggle.

API helper example & tests – api.test.ts as a placeholder pattern.

Storybook scaffold – .storybook folder and integration with Vite.

Storybook docs – stories for the implemented components.

NPM scripts – dev, build, test, Storybook commands wired in package.json.

The library is ready to be extended with additional shared UI elements (dropdowns, tables, charts, form controls, etc.) as new issues are created.