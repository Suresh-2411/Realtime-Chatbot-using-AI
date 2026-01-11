import Chat from "./components/Chat";
import ThemeToggle from "./components/ThemeToggle";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Chat />
    </div>
  );
}

export default App;
