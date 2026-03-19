# React Revision Using This Project (Hindi - Roman)

## 1) Component kya hota hai?
Component ek reusable UI function hota hai jo JSX return karta hai.

Is project ke examples:
- `Home` -> product list component
- `Nav` -> sidebar component
- `Create` -> form component
- `Edit` -> form component
- `Details` -> single product page component

## 2) JSX basics
JSX HTML jaisa dikhta hai, par JavaScript inside `{}` run kar sakte ho.

Examples:
- `{product.title}`
- `{filteredProducts.map(...)}`
- conditional rendering: `{condition && <Component />}`

## 3) Hooks revision
### `useState`
Component-level state banata hai.

Examples:
- `Create.jsx` me form fields:
`title`, `image`, `category`, `price`, `description`
- `Details.jsx` me `product`
- `Edit.jsx` me loading + form states

### `useEffect`
Side effects ke liye (API calls, localStorage sync, etc.).

Examples:
- `Context.jsx`: products change hote hi localStorage update.
- `Context.jsx`: initial load me API fetch.
- `Edit.jsx`: product milte hi form pre-fill.
- `Details.jsx`: id change hone par product load.

### `useContext`
Global data ko props drilling ke bina access karna.

Example:
- `const [products, setproducts] = useContext(productContext);`
- Used in `Home`, `Nav`, `Create`, `Edit`, `Details`.

### `useParams`
Dynamic route params read karta hai.

Examples:
- `useParams()` in `Details` -> `id`
- `useParams()` in `Edit` -> `id`
- `useParams()` in `Home` -> `category`

### `useNavigate`
Programmatic routing.

Examples:
- Create success ke baad `navigate("/")`
- Edit success ke baad `navigate("/")`
- Delete ke baad `navigate("/")`

### `useLocation`
Current URL ka info (path + query).

Example:
- `App.jsx` me `pathname` and `search` use hua hai.

## 4) Controlled forms (important interview concept)
`Create` aur `Edit` dono controlled form pattern follow karte hain:
- Input value state se bind
- `onChange` par state update
- Submit par full state object process

Pattern:
1. `const [title, settitle] = useState("")`
2. `<input value={title} onChange={(e) => settitle(e.target.value)} />`

## 5) List rendering and keys
`Home.jsx`:
- `filteredProducts.map((p, i) => (...))`
- Har item ke liye card generate.

Tip:
- Future me `key={p.id}` use karna `key={i}` se better hota hai.

## 6) Conditional rendering
Examples:
- Loading check:
`if (!product) return <Loading />`
- Route dependent UI:
`{(pathname !== "/" || search.length > 0) && <Link ... />}`

## 7) React Router concepts
### Route definition
`App.jsx` me:
- `/`
- `/create`
- `/edit/:id`
- `/details/:id`
- `/category/:category`

### Link
`<Link to="/create">`
Page reload ke bina navigation.

## 8) Context API concept
`Context.jsx` me:
1. `createContext()` se context create
2. Provider me value pass
3. Child components `useContext` se consume

Yeh state sharing ka lightweight alternative hai Redux ke bina.

## 9) Immutable updates (bahut important)
React me state direct mutate nahi karte.

Used patterns:
- Add -> `[...products, newProduct]`
- Update -> `products.map(...)`
- Delete -> `products.filter(...)`

## 10) LocalStorage + React sync
`Context.jsx` me:
- Initial load from localStorage
- State change par localStorage update

Isse persistence milti hai even after refresh.

## 11) API call basics with Axios
`Axios.jsx`:
- baseURL set
- components me relative endpoint call

Example:
- `axios("/products")`
- `axios.get(/products/:id)`

## 12) Quick practice tasks (self revision)
1. `Home.jsx` me search bar add karo.
2. `Create/Edit` validation ko reusable function me nikalo.
3. `Nav` me "All Categories" button add karo.
4. `Loading` ko spinner design me convert karo.
5. `Details` me confirm dialog before delete add karo.

## 13) Next React topics to revise after this project
1. `useMemo` and `useCallback`
2. Custom hooks (`useProducts` jaisa)
3. Error boundaries
4. Protected routes
5. API integration with async states (`loading`, `error`, `success`)
