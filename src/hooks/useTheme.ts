import { useEffect, useState } from "react";

export function useTheme(): [
  "light" | "dark",
  (theme: "light" | "dark") => void,
] {
  // Get the theme cookie
  const getThemeCookie = () => {
    const cookies = document.cookie.split(";");
    const themeCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("theme="),
    );
    return themeCookie ? themeCookie.split("=")[1].trim() : null;
  };

  const [theme, setTheme] = useState<"light" | "dark">("light");

  const onThemeChange = (state: "light" | "dark") => {
    const maxAge = 60 * 60 * 24 * 365; // 1 year
    document.cookie = `theme=${state}; max-age=${maxAge}; path=/`;

    // Update the DOM class
    if (state === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    setTheme(state);
  };

  // Set default theme value
  useEffect(() => {
    const themeValue = getThemeCookie();
    if (themeValue === "light" || themeValue === "dark") {
      onThemeChange(themeValue);
    } else {
      // If no valid cookie, use system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      onThemeChange(prefersDark ? "dark" : "light");
    }
  }, []);

  // Return value and setter function
  return [theme, onThemeChange];
}
