import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <span className="logo-icon">🛍</span>
          <h2>Product Store</h2>
        </div>

        <button className="refresh-btn">
          Username
        </button>

      </div>
    </header>
  );
}

export default Navbar;