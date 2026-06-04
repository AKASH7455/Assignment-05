import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="products-section">
      <h2 className="products-heading">
        Our Products
      </h2>

      {loading ? (
        <h3 className="loading-text">Loading...</h3>
      ) : (
        <div className="products-grid">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              image={item.images[0]}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;