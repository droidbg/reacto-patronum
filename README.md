# React Learning Hub

A single React app to organize and showcase your practice projects and concept demos (e.g., Tic-Tac-Toe, Hooks exercises), each under its own route. Keep everything in one codebase with clear separation.

## Quick Start

- **Install**: `npm install`
- **Run dev server**: `npm start`
- Open: http://localhost:3000

## Structure

- `src/components/` — shared UI like `Navbar`
- `src/pages/` — one file per example/demo (e.g., `TicTacToe.js`, `HooksPractice.js`, `Projects.js`, `Home.js`)
- `src/App.js` — routes and layout
- `src/index.js` — wraps app with `BrowserRouter`
- `public/` — static assets and `index.html`

## Routing

Uses `react-router-dom` to map pages to URLs:
- `/` → Home
- `/projects` → Projects listing
- `/tic-tac-toe` → Tic-Tac-Toe
- `/hooks-practice` → Hooks demos

## Add a New Example

1) Create a page under `src/pages/`, e.g. `FormsPlayground.js`:
```jsx
import React from 'react';
export default function FormsPlayground(){
  return <div><h1>Forms Playground</h1></div>;
}
```
2) Register the route in `src/App.js`:
```jsx
import FormsPlayground from './pages/FormsPlayground';
// inside <Routes>
<Route path="/forms-playground" element={<FormsPlayground />} />
```
3) Link it from `src/components/Navbar.js` and/or list it in `src/pages/Projects.js`.

## Web Vitals (Performance)

`src/reportWebVitals.js` can log CLS, FID, FCP, LCP, TTFB. To see metrics in console:
```js
// src/index.js
import reportWebVitals from './reportWebVitals';
reportWebVitals(console.log);
```
Reload the app and check DevTools Console.

## Troubleshooting

- React Router DOM v7 requires Node >= 20. On Node 18, use a v6 release:
  ```bash
  npm install react-router-dom@6.26.1
  ```
- Port in use: set `PORT=3001` before `npm start`.
- If fast refresh misbehaves, ensure only one dev server is running.

---

 



 How to add a new example quickly
Create a page in src/pages/, e.g., FormsPlayground.js.
Add a route in 
src/App.js
:
jsx
<Route path="/forms-playground" element={<FormsPlayground />} />
Link it in 
src/components/Navbar.js
 or list it in 
src/pages/Projects.js
.