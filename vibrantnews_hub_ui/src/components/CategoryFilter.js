import React, { useContext } from "react";
import { NewsContext, CATEGORIES } from "../contexts/NewsContext";

/**
 * Displays a filter bar for categories using user-selected preferences if available.
 */
export default function CategoryFilter() {
  const { filter, setFilter, preferredCategories } = useContext(NewsContext);

  const cats =
    preferredCategories && preferredCategories.length > 0
      ? CATEGORIES.filter((c) => preferredCategories.includes(c.key))
      : CATEGORIES;

  return (
    <div className="cat-filter-bar">
      <button
        className={`cat-filter-btn${filter === "all" ? " active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      {cats.map((cat) => (
        <button
          key={cat.key}
          className={`cat-filter-btn${filter === cat.key ? " active" : ""}`}
          onClick={() => setFilter(cat.key)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
