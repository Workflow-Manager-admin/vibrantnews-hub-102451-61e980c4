import React from "react";

/**
 * Simple animated loading spinner.
 */
export default function Loader() {
  return (
    <div className="loader-spin">
      <div className="loader-dot"></div>
      <div className="loader-dot"></div>
      <div className="loader-dot"></div>
    </div>
  );
}
