import { useTheme } from "../hooks/useTheme";
import { IconMoon, IconSun } from "./icons";

export default function Navbar() {
  const [theme, setTheme] = useTheme();

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md dark:bg-[hsl(209,23%,22%)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-8 2xl:px-0">
        <h1 className="text-md font-extrabold text-[hsl(200,15%,8%)] dark:text-white">
          Where in the world
        </h1>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          id="theme-toggle"
          className="flex items-center gap-2"
        >
          {theme === "dark" ? (
            <IconMoon className="size-4 text-black dark:text-white" />
          ) : (
            <IconSun className="size-4 text-black dark:text-white" />
          )}
          <span className="font-bold text-[hsl(200,15%,8%)] dark:text-white">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </div>
    </nav>
  );
}
