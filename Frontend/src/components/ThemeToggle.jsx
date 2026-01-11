const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
