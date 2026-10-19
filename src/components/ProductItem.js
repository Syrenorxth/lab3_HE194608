import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <Link to={"/products/" + product.id}>View Details</Link>
      </td>
    </tr>
  );
}

export default ProductItem;
