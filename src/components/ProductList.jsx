import ProductCard from "./ProductCard";
import Loader from "./Loader";
import SkeletonCard from "./SkeletonCard";
import ErrorMessage from "./ErrorMessage";
import EmptyState from "./EmptyState";
import useFetch from "../hooks/useFetch";

import "../styles/productList.css";

const API_URL = "https://api.escuelajs.co/api/v1/products";

function ProductList() {
  const { data, loading, error, refetch } = useFetch(API_URL);

  if (loading) {
    return (
      <section className="products-section">
        <Loader />

        <div className="products-grid">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!data || data.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="products-section">
      <div className="products-header">
        <h2>Featured Products</h2>

        <button
          className="refresh-button"
          onClick={refetch}
        >
          Refresh Products
        </button>
      </div>

      <div className="products-grid">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            image={product.images?.[0] || "https://via.placeholder.com/300"}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
