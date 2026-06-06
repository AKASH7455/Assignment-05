# Product Store

This is a simple React assignment project. It fetches products from an API and displays them in product cards.

## Features

- Fetch products from API
- Use a custom hook for API call
- Show loading message while data is loading
- Show error message if API fails
- Display product image, title, and price
- Simple and beginner-friendly code

## Technologies Used

- React
- JavaScript
- Fetch API
- CSS
- Vite

## Custom Hook

This project uses a custom hook named `useFetch`.

The custom hook is used to fetch data from the API. It returns three things:

- `data`
- `loading`
- `error`

## How To Run

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Folder Structure

```txt
src
  components
    Navbar.jsx
    ProductList.jsx
    ProductCard.jsx
  hooks
    useFetch.js
  styles
    global.css
    navbar.css
    productCard.css
```

## Author

Akash Kumar
