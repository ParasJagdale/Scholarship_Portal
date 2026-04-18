# ScholarFlow - National Scholarship Portal (Frontend Only)

Industry-style ReactJS case study prototype for a multi-role scholarship workflow.

## Tech Stack

- React (Vite)
- React Router DOM
- Tailwind CSS (primary styling)
- Bootstrap + React-Bootstrap (forms/tables/modals)
- Lucide React + React Icons
- Plain JavaScript (no TypeScript)

## Important Scope

- Frontend only
- No backend
- No database
- No localStorage/sessionStorage/Firebase/external storage
- No real authentication
- No real form validation
- UI-only role flows and navigation

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Create production build:

```bash
npm run build
```

## Tailwind Setup Notes

- Config file: `tailwind.config.js`
- PostCSS file: `postcss.config.js`
- Global directives are in `src/index.css`:
  - `@tailwind base;`
  - `@tailwind components;`
  - `@tailwind utilities;`
- Tailwind scans:
  - `./index.html`
  - `./src/**/*.{js,jsx}`

## Project Structure

```text
src/
	assets/
	components/
		common/
		layout/
		forms/
		cards/
		tables/
		modals/
	data/
		mockSchemes.js
		mockApplications.js
		mockInstitutes.js
		mockNotifications.js
		mockDashboardStats.js
	layouts/
		PublicLayout.jsx
		DashboardLayout.jsx
	pages/
		public/
		auth/
		student/
		institute/
		state/
		ministry/
		shared/
	routes/
		AppRoutes.jsx
	utils/
	App.jsx
	main.jsx
```

## Notes

- Mock data is centralized in `src/data`.
- Role-based dashboards are under `src/pages` by module.
- Routing uses nested layouts for public and dashboard experiences.
