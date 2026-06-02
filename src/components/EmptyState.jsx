import "../styles/emptyState.css";

function EmptyState() {
  return (
    <div className="empty-state">

      <div className="empty-icon">
        📦
      </div>

      <h2 className="empty-title">
        No Products Found
      </h2>

      <p className="empty-description">
        We couldn't find any products at the moment.
      </p>

    </div>
  );
}

export default EmptyState;