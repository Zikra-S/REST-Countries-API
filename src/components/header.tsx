import { useTheme } from "../hooks/useTheme";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <p className="font-bold">Where in the world?</p>

      <button onClick={toggleTheme} aria-pressed={theme === "dark"} className="cursor-pointer">
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
