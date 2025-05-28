import React, { useState, useContext } from "react";
import { NewsContext, CATEGORIES } from "../contexts/NewsContext";

/**
 * Onboarding modal for new users to pick favorite categories.
 * Persists choices, blocks rest of UI until completed.
 */
export default function Onboarding() {
  const { markOnboarded } = useContext(NewsContext);
  const [selected, setSelected] = useState([]);

  // PUBLIC_INTERFACE
  const toggleCategory = (key) => {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const finish = () => {
    if (selected.length === 0) {
      alert("Select at least one category");
      return;
    }
    markOnboarded(selected);
  };

  return (
    <div className="onboarding-modal">
      <div className="onboarding-content">
        <h2>Welcome to VibrantNews Hub!</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Pick your favorite categories. We’ll prioritize news you care about.
        </p>
        <div className="onboarding-categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`onboarding-cat-btn ${
                selected.includes(cat.key) ? "selected" : ""
              }`}
              style={{
                borderColor: selected.includes(cat.key)
                  ? "var(--vn-accent)"
                  : "var(--border-color)"
              }}
              onClick={() => toggleCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <button className="btn btn-large" style={{ marginTop: 24 }} onClick={finish}>
          Continue &rarr;
        </button>
      </div>
    </div>
  );
}
