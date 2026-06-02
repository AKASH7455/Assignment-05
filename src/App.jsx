// App.jsx

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <ProductList />
      </main>
    </>
  );
}

export default App;