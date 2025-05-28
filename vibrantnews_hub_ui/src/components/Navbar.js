import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NotificationContext } from "../contexts/NotificationContext";

/**
 * App navbar with logo, theme switch, push notification opt-in, and bookmarks.
 * Switches main view via callbacks from parent.
 */
export default function Navbar({ showSection, activeSection }) {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { enabled, requestPermission } = useContext(NotificationContext);

  return (
    <nav className="navbar">
      <div className="container nav-flex">
        <div className="logo">
          <span className="logo-symbol" role="img" aria-label="vibrant">
            <svg width={28} height={28} viewBox="0 0 22 22" fill="none"><circle cx={11} cy={11} r={10} fill="url(#paint0_linear)" /><defs><linearGradient id="paint0_linear" x1="2" y1="4" x2="20" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6B6B"/><stop offset="1" stopColor="#FFD93D"/></linearGradient></defs></svg>
          </span>
          VibrantNews <span className="hub-label">Hub</span>
        </div>
        <div className="nav-actions">
          <button
            className={
              activeSection === "feed"
                ? "nav-btn nav-btn-active"
                : "nav-btn"
            }
            onClick={() => showSection("feed")}
            aria-label="News Feed"
          >
            <span role="img" aria-label="news">
              📰
            </span>
            <span className="nav-label">Feed</span>
          </button>
          <button
            className={
              activeSection === "bookmarks"
                ? "nav-btn nav-btn-active"
                : "nav-btn"
            }
            onClick={() => showSection("bookmarks")}
            aria-label="Bookmarked"
          >
            <span role="img" aria-label="bookmarks">
              📑
            </span>
            <span className="nav-label">Bookmarks</span>
          </button>
          <button
            className="nav-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title="Toggle dark/light mode"
          >
            {theme === "light" ? "🌞" : "🌚"}
          </button>
          <button
            className="nav-btn"
            onClick={requestPermission}
            title={enabled ? "Notifications enabled" : "Enable push notifications"}
            aria-label="Toggle notifications"
            style={{ opacity: enabled ? "1" : "0.75" }}
          >
            <span role="img" aria-label="notifications">
              🔔
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
