import React from "react";

const SelectCategoryFilter = ({ headSearch, category, setCategory }) => {
  const options = headSearch.map((meal) => meal.strCategory);
  const unique = [...new Set(options)];

  return (
    <select
      value={category}
      className="filter_by_category"
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">All categories</option>
      {unique.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectCategoryFilter;
