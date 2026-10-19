import { useParams, Link } from "react-router-dom";
import { products } from "../data.js";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
}

export default ProductDetail;
