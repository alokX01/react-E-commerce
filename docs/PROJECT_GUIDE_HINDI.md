# Project Guide (Hindi - Roman)

## 1) Project ka purpose
Yeh ek React + Vite based simple product app hai jisme:
- Product list dekh sakte ho
- Category filter laga sakte ho
- Product details dekh sakte ho
- Product create/edit/delete kar sakte ho

Data source hybrid hai:
- Primary persistence: `localStorage`
- Initial fallback data: `https://fakestoreapi.com/products`

## 2) Tech stack
- React 19
- React Router DOM
- Context API (global state share karne ke liye)
- Axios (API calls)
- Tailwind CSS v4 (styling)
- React Toastify (notifications)

## 3) App ka end-to-end flow
1. App `src/main.jsx` se boot hoti hai.
2. `Context` provider poori app ko product state deta hai.
3. `BrowserRouter` route handling karta hai.
4. `App.jsx` route mapping karta hai.
5. `Home` component me product cards render hote hain.
6. `Details` page me selected product ka full info milta hai.
7. `Create` aur `Edit` page se form submit karke context/localStorage update hota hai.
8. `Delete` action details page se context/localStorage dono update karta hai.

## 4) Routing map
- `/` -> Home
- `/create` -> Create product form
- `/edit/:id` -> Edit selected product
- `/details/:id` -> Product details
- `/category/:category` -> Category filtered Home

## 5) Data management approach
`src/utils/Context.jsx` me main logic:
- Initial state localStorage se load hota hai.
- Har state update ke baad localStorage sync hota hai.
- Agar localStorage empty ho to API fetch hota hai.
- `[products, setproducts]` context value ke through saare components state read/update karte hain.

Is approach ka fayda:
- Page refresh ke baad bhi local changes survive karte hain.
- API unavailable ho tab bhi app local data par kaam kar sakti hai.

## 6) CRUD ka implementation summary
### Create
- `Create.jsx` controlled form use karta hai.
- Validation ke baad `nanoid()` se unique id banakar product add hota hai.
- Updated array context + localStorage me save hoti hai.

### Read
- Home me list render.
- Details me single item render.

### Update
- `Edit.jsx` me route id se product find hota hai.
- Form pre-fill hota hai.
- Submit par `map()` se matching product replace hota hai.

### Delete
- `Details.jsx` me delete button.
- `filter()` se item remove.
- State/localStorage sync.

## 7) UI structure high level
- Left fixed sidebar (`Nav`)
- Right side scrollable content area (`Home`)
- Details page split layout (image + content)
- Form pages center aligned

## 8) Important observations
- API se jo ids aati hain woh generally number hoti hain.
- Local created ids `nanoid` se string hoti hain.
- Isliye compare karte waqt kahi-kahi string conversion (`toString()`) kiya gaya hai.

## 9) Run and build commands
```bash
npm install
npm run dev
npm run build
npm run preview
```

## 10) Revision ke liye recommended order
1. `main.jsx`
2. `App.jsx`
3. `utils/Context.jsx`
4. `components/Nav.jsx`
5. `components/Home.jsx`
6. `components/Details.jsx`
7. `components/Create.jsx`
8. `components/Edit.jsx`

Uske baad `docs/REACT_REVISION_FROM_CODEBASE_HINDI.md` read karo.
