/**
 * Simulates an AI summary for an article.
 * In production, connect to an AI backend.
 *
 * @param {string} content - The article content or description.
 * @returns {Promise<string>} Short mock summary.
 */
// PUBLIC_INTERFACE
export async function getAISummary(content = "") {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        content.length > 100
          ? content.split(" ").slice(0, 20).join(" ") + "..."
          : content + " [AI Summary Generated]"
      );
    }, 700);
  });
}
