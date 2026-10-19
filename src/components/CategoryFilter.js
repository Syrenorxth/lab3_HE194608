function CategoryFilter({ categories, category, onChange }) {
  return (
    <select value={category} onChange={(e) => onChange(e.target.value)}>
      <option value="">All category</option>
      {categories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
