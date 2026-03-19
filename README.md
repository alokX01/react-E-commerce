# React E-Commerce

A single-page e-commerce frontend built with React, Vite, and Tailwind CSS.
It supports product listing, category filtering, product details, and local CRUD flows (create/edit/delete) with localStorage persistence.

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 4
- Axios
- React Toastify
- Nanoid

## Project Features

- Product listing with card-based UI
- Category-wise filtering
- Product details page
- Create, edit, and delete product flows
- Data persistence in localStorage
- API fallback support using Fake Store API

## Local Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Environment Variables

Create a `.env` file from `.env.example`:

```env
VITE_API_BASE_URL=https://fakestoreapi.com
VITE_BASE_PATH=/
```
