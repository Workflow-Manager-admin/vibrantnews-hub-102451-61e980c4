import React, { useContext, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { NewsProvider, NewsContext } from "./contexts/NewsContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import Navbar from "./components/Navbar";
import Onboarding from "./components/Onboarding";
import CategoryFilter from "./components/CategoryFilter";
import NewsFeed from "./components/NewsFeed";
import Bookmarks from "./components/Bookmarks";

function VibrantNewsApp() {
  const { onboarded } = useContext(NewsContext);
  const [section, setSection] = useState("feed");

  // Show onboarding modal if not finished
  if (!onboarded)
    return (
      <div className="app">
        <Onboarding />
      </div>
    );

  return (
    <div className="app">
      <Navbar showSection={setSection} activeSection={section} />
      <main>
        <div className="container" style={{ marginTop: 68, marginBottom: 36 }}>
          <CategoryFilter />
          {section === "feed" && <NewsFeed />}
          {section === "bookmarks" && <Bookmarks />}
        </div>
      </main>
    </div>
  );
}

// PUBLIC_INTERFACE
export default function App() {
  return (
    <ThemeProvider>
      <NewsProvider>
        <NotificationProvider>
          <VibrantNewsApp />
        </NotificationProvider>
      </NewsProvider>
    </ThemeProvider>
  );
}