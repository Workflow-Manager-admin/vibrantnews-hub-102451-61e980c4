import React, { createContext, useState, useEffect } from "react";
import { getFromStorage, setToStorage } from "../utils/storage";
import { fetchNewsFeed } from "../utils/newsApi";

// Demo categories
export const CATEGORIES = [
  { key: "technology", label: "Technology" },
  { key: "politics", label: "Politics" },
  { key: "health", label: "Health" },
  { key: "sports", label: "Sports" },
  { key: "entertainment", label: "Entertainment" }
];

// PUBLIC_INTERFACE
export const NewsContext = createContext();

/**
 * NewsProvider manages:
 * - news feed articles
 * - selected filters/categories
 * - bookmarks (persisted)
 * - user onboarding status & category preferences
 */
export function NewsProvider({ children }) {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [bookmarks, setBookmarks] = useState(() => getFromStorage("bookmarks", []));
  const [onboarded, setOnboarded] = useState(() =>
    getFromStorage("onboarded", false)
  );
  const [preferredCategories, setPreferredCategories] = useState(() =>
    getFromStorage("preferredCategories", [])
  );

  // Fetch news
  useEffect(() => {
    setLoading(true);
    fetchNewsFeed()
      .then((articles) => setFeed(articles))
      .finally(() => setLoading(false));
  }, []);

  // Bookmarks persist
  useEffect(() => setToStorage("bookmarks", bookmarks), [bookmarks]);
  useEffect(() => setToStorage("onboarded", onboarded), [onboarded]);
  useEffect(
    () => setToStorage("preferredCategories", preferredCategories),
    [preferredCategories]
  );

  // PUBLIC_INTERFACE
  const bookmarkArticle = (article) => {
    setBookmarks((prev) => {
      if (prev.find((a) => a.url === article.url)) return prev;
      return [...prev, article];
    });
  };
  // PUBLIC_INTERFACE
  const unbookmarkArticle = (url) => {
    setBookmarks((prev) => prev.filter((a) => a.url !== url));
  };

  // PUBLIC_INTERFACE
  const markOnboarded = (categories) => {
    setPreferredCategories(categories);
    setOnboarded(true);
  };

  // PUBLIC_INTERFACE
  const resetOnboarding = () => {
    setOnboarded(false);
    setPreferredCategories([]);
  };

  return (
    <NewsContext.Provider
      value={{
        feed,
        loading,
        filter,
        setFilter,
        bookmarks,
        bookmarkArticle,
        unbookmarkArticle,
        onboarded,
        markOnboarded,
        resetOnboarding,
        preferredCategories,
        setPreferredCategories
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
