import "../styles/productCard.css";

function ProductCard({ image, title, price }) {
  return (
    <article className="product-card">

      <div className="product-image-wrapper">
        <img
          src={image}
          alt={title}
          className="product-image"
        />
      </div>

      <div className="product-content">

        <h3 className="product-title">
          {title}
        </h3>

        <p className="product-price">
          ${price}
        </p>

      </div>

    </article>
  );
}

export default ProductCard;