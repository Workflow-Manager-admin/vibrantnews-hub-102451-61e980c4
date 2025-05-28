/**
 * Persists data to localStorage with JSON.
 *
 * @param {string} key
 * @param {*} value
 */
// PUBLIC_INTERFACE
export function setToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

/**
 * Reads data from localStorage.
 * @param {string} key
 * @param {*} defaultValue
 * @returns {*} parsed value or default
 */
// PUBLIC_INTERFACE
export function getFromStorage(key, defaultValue) {
  try {
    const str = localStorage.getItem(key);
    return str !== null ? JSON.parse(str) : defaultValue;
  } catch {
    return defaultValue;
  }
}
