import React, { createContext, useState } from "react";

// PUBLIC_INTERFACE
export const NotificationContext = createContext();

/**
 * NotificationProvider provides in-app (and browser/demo) push notifications.
 * Allows enabling/disabling notifications from the app, shows test notifications on toggle.
 */
export function NotificationProvider({ children }) {
  const [enabled, setEnabled] = useState(
    Notification && Notification.permission === "granted"
  );

  // PUBLIC_INTERFACE
  const requestPermission = () => {
    if (!("Notification" in window)) {
      alert("Your browser does not support notifications.");
      return;
    }
    Notification.requestPermission().then((permission) => {
      setEnabled(permission === "granted");
      if (permission === "granted") {
        new Notification("Notifications enabled for breaking news!");
      }
    });
  };

  // PUBLIC_INTERFACE
  const sendNotification = (title, options) => {
    if (!enabled) return;
    if (Notification.permission === "granted") {
      new Notification(title, options);
    }
  };

  return (
    <NotificationContext.Provider
      value={{ enabled, requestPermission, sendNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
