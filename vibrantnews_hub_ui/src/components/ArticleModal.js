import React, { useEffect, useState } from "react";
import { getAISummary } from "../utils/summarize";

/**
 * ArticleModal displays article details with AI-powered summary (frontend simulation).
 */
export default function ArticleModal({ article, onClose }) {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAISummary(article.content || article.description).then((sum) => {
      setSummary(sum);
      setLoading(false);
    });
  }, [article]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        tabIndex={0}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          ×
        </button>
        <img
          src={article.urlToImage}
          alt={article.title}
          className="modal-article-img"
        />
        <h2 style={{ marginTop: 10 }}>{article.title}</h2>
        <div className="modal-meta">
          <span>
            {article.source?.name || "News"}
          </span>{" "}
          | <span>{new Date(article.publishedAt).toLocaleString()}</span>
        </div>
        <div style={{ margin: "12px 0" }}>{article.description}</div>
        <div className="modal-summary-box">
          <div className="modal-summary-label">
            <b>AI-powered Summary:</b>
          </div>
          <div className="modal-summary">
            {loading ? <span>Generating...</span> : summary}
          </div>
        </div>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="modal-read-link">
          Read full article &rarr;
        </a>
      </div>
    </div>
  );
}
