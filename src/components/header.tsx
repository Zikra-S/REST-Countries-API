import { useTheme } from "../hooks/useTheme";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="bg-white shadow-md dark:bg-dm-elements">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 md:px-20">
        <p className="text-sm font-extrabold md:text-2xl">Where in the world?</p>

        <button onClick={toggleTheme} aria-pressed={isDark} className="flex cursor-pointer items-center gap-2 text-xs font-semibold md:text-base">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={isDark ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;
