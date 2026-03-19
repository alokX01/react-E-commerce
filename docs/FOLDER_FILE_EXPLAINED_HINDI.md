# Folder and File Explained (Hindi - Roman)

## Root level
- `package.json`
Project dependencies aur scripts (`dev`, `build`, `preview`) yahin defined hain.

- `vite.config.js`
Vite ka config file (build/dev server behavior).

- `index.html`
Main HTML template jisme `root` div hota hai jahan React mount hoti hai.

- `README.md`
Quick project intro aur docs index.

- `dist/`
Production build output.

- `node_modules/`
Installed packages.

## `src/` folder
Yeh actual application code ka main folder hai.

### `src/main.jsx`
- App ka entry point.
- `Context`, `BrowserRouter`, `ToastContainer` wrap karta hai.

### `src/App.jsx`
- Central route configuration.
- Home shortcut link handle karta hai.

### `src/index.css`
- Tailwind CSS import hoti hai.

### `src/assets/`
- Static assets:
- `logo.png`
- `react.svg`

### `src/utils/`
- `Axios.jsx`
Reusable axios instance with `baseURL`.

- `Context.jsx`
Global product state store.
`localStorage` sync + initial API fetch logic.

### `src/components/`
- `Nav.jsx`
Sidebar navigation + category filter links.

- `Home.jsx`
Product list page (cards + category based filtering).

- `Details.jsx`
Single product detail page + edit/delete actions.

- `Create.jsx`
Add product form (controlled inputs + validation + save).

- `Edit.jsx`
Edit existing product form (pre-filled values + update save).

- `Loading.jsx`
Reusable loading fallback.

## Data flow file-by-file
1. `main.jsx` app start karta hai.
2. `Context.jsx` products state provide karta hai.
3. `App.jsx` route ke basis par component render karta hai.
4. Components context consume karke read/write operations karte hain.
5. `Context.jsx` state changes ko localStorage me persist karta hai.

## Fast code-reading strategy
1. `Context.jsx` samjho (state source of truth).
2. `App.jsx` samjho (navigation and route map).
3. `Home` + `Nav` (list and filtering).
4. `Details` (single item flow).
5. `Create` and `Edit` (form and updates).
