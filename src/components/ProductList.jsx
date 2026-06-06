import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";

const PRODUCT_API = "https://api.escuelajs.co/api/v1/products";

function ProductList() {
  const {
    data: products,
    loading,
    error,
  } = useFetch(PRODUCT_API);

  return (
    <section className="products-section">
      <h2 className="products-heading">
        Our Products
      </h2>

      {loading ? (
        <h3 className="loading-text">Loading...</h3>
      ) : error ? (
        <h3 className="loading-text">{error}</h3>
      ) : (
        <div className="products-grid">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              image={item.images?.[0]}
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
