import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to ProductStore</h1>
      <p>Manage and explore products for your needs</p>
      <Link to="/products" className="home-button">View Products</Link>
    </div>
  );
}

export default Home;
