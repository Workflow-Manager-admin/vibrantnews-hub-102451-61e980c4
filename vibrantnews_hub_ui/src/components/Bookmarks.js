import React, { useContext, useState } from "react";
import { NewsContext } from "../contexts/NewsContext";
import ArticleCard from "./ArticleCard";
import ArticleModal from "./ArticleModal";

/**
 * Renders the list of bookmarked articles.
 */
export default function Bookmarks() {
  const { bookmarks } = useContext(NewsContext);
  const [openedArticle, setOpenedArticle] = useState(null);

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Bookmarked Articles</h2>
      <div className="feed-list">
        {bookmarks.length === 0 && (
          <div style={{ color: "var(--text-secondary)", textAlign: "center", width: "100%", margin: "64px 0" }}>
            No articles bookmarked yet.
          </div>
        )}
        {bookmarks.map((a) => (
          <ArticleCard
            key={a.url}
            article={a}
            onClick={() => setOpenedArticle(a)}
            isBookmarked
          />
        ))}
      </div>
      {openedArticle && (
        <ArticleModal
          article={openedArticle}
          onClose={() => setOpenedArticle(null)}
        />
      )}
    </div>
  );
}
