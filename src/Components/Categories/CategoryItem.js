import React from "react";
import "../Categories/CategoryItem.css";

const CategoryItem = ({ category }) => {
  const { categoryName } = category;
  return (
    <div className="categoryItem">
      <p>{categoryName}</p>
    </div>
  );
};

export default CategoryItem;
