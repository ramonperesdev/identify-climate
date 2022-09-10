import { Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
// import "./global.css";
import { useState } from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/themes";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={themeToggler}>Switch Theme</button>
    </ThemeProvider>
  );
}

export default App;
