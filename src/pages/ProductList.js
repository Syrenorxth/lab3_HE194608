import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const category = searchParams.get("category") || "";
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = 4;

  const categories = products
    .map((product) => product.category)
    .filter((item, index, list) => list.indexOf(item) === index);

  const updateParams = (newKeyword, newCategory, newPage) => {
    const params = {};
    if (newKeyword !== "") {
      params.keyword = newKeyword;
    }
    if (newCategory !== "") {
      params.category = newCategory;
    }
    if (newPage > 1) {
      params.page = newPage;
    }
    setSearchParams(params);
  };

  const handleSearch = (text) => {
    updateParams(text.trim(), category, 1);
  };

  const handleCategoryChange = (value) => {
    updateParams(keyword, value, 1);
  };

  const handlePageChange = (newPage) => {
    updateParams(keyword, category, newPage);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase()) &&
      (category === "" || product.category === category)
  );

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const currentProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div>
      <h1>Product List</h1>
      <SearchBar keyword={keyword} onSearch={handleSearch} />
      <CategoryFilter
        categories={categories}
        category={category}
        onChange={handleCategoryChange}
      />
      {currentProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </tbody>
          </table>
          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default ProductList;
