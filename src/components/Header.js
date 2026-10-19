import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/" className="logo">ProductStore</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}

export default Header;
