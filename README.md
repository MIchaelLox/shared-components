# 🎨 Shared Components Library

## Overview
A reusable UI and utilities library powering the SPV ecosystem interfaces.  
Centralizes visual identity, UX patterns, and data-fetch helpers.

---

## Components
- **Forms**: validated input components for all simulation parameters.  
- **Tables**: interactive cost/risk result tables.  
- **Charts**: dynamic graphs (Recharts/D3).  
- **Theme Manager**: light/dark themes.  
- **API Helpers**: wrappers for fetch/auth calls.  

---

## Architecture

shared-components/

├── src/

│ ├── components/

│ │ ├── FormInput.jsx

│ │ ├── TableView.jsx

│ │ ├── ChartView.jsx

│ │ └── ThemeSwitcher.jsx

│ ├── hooks/

│ ├── utils/

│ │ └── apiClient.js

│ ├── index.js

│ └── styles/

│ └── globals.css

├── tests/

│ ├── test_components.test.js

│ └── test_apiClient.test.js

├── .storybook/

│ ├── main.js

│ └── preview.js

└── README.md


---

## Development Workflow
1. Run `npm install`  
2. Start Storybook: `npm run storybook`  
3. Develop components in isolation.  
4. Run tests: `npm test`  
5. Publish package via GitHub Packages or npm registry.

---

## Phase 2 Development Tasks
1. Initialize project (React + Vite + Tailwind + Storybook).  
2. Build core components (Forms, Tables, Charts, ThemeSwitcher).  
3. Implement API helpers for cross-project use.  
4. Add Jest/RTL tests.  
5. Publish Storybook docs site.

---

## Technologies
React 18, Vite, Tailwind CSS, Jest, Storybook, npm registry.
