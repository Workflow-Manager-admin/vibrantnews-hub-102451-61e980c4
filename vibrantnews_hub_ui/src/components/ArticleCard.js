import React, { useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";

/**
 * ArticleCard displays news article info as a responsive card,
 * with preview, thumbnail, summary and bookmark.
 */
export default function ArticleCard({ article, onClick, isBookmarked }) {
  const { bookmarkArticle, unbookmarkArticle } = useContext(NewsContext);
  const tagColors = {
    technology: "var(--vn-primary)",
    politics: "#1894FF",
    health: "#4ECDC4",
    sports: "#FFD93D",
    entertainment: "#c85be4"
  };

  return (
    <div className="news-card" onClick={(e) => {
      if (e.target.closest(".bookmark-btn")) return;
      onClick();
    }}>
      <div className="card-img-wrap">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="card-img"
        />
        <div
          className="card-tag"
          style={{
            background: tagColors[article.category] || "var(--vn-secondary)"
          }}
        >
          {article.category.charAt(0).toUpperCase() +
            article.category.slice(1)}
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{article.title}</h3>
        <div className="card-desc">{article.description}</div>
      </div>
      <button
        className={`bookmark-btn${isBookmarked ? " active" : ""}`}
        aria-label={isBookmarked ? "Remove bookmark" : "Bookmark article"}
        onClick={(e) => {
          e.stopPropagation();
          isBookmarked
            ? unbookmarkArticle(article.url)
            : bookmarkArticle(article);
        }}
      >
        {isBookmarked ? "★" : "☆"}
      </button>
    </div>
  );
}
