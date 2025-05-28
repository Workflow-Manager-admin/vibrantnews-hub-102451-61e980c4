import React, { useState, useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import ArticleModal from "./ArticleModal";

/**
 * NewsFeed displays the main news feed, filtered as needed,
 * and handles tapping on an article for modal view/summary.
 */
export default function NewsFeed() {
  const { feed, loading, filter, bookmarks } = useContext(NewsContext);
  const [openedArticle, setOpenedArticle] = useState(null);

  const articles =
    filter === "all"
      ? feed
      : feed.filter((a) => a.category === filter);

  return (
    <div>
      {loading && <Loader />}
      {!loading && articles.length === 0 && (
        <div style={{ textAlign: "center", marginTop: 64 }}>
          No articles found for this category.
        </div>
      )}
      <div className="feed-list">
        {articles.map((a) => (
          <ArticleCard
            key={a.url}
            article={a}
            onClick={() => setOpenedArticle(a)}
            isBookmarked={!!bookmarks.find((b) => b.url === a.url)}
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
