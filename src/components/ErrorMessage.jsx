import "../styles/error.css";

function ErrorMessage({ message }) {
  return (
    <div className="error-container">

      <div className="error-icon">
        ⚠️
      </div>

      <h2 className="error-title">
        Failed to Load Products
      </h2>

      <p className="error-message">
        {message || "Something went wrong. Please try again later."}
      </p>

    </div>
  );
}

export default ErrorMessage;