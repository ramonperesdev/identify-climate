import { Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
// import "./global.css";
import { darkTheme, lightTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/global";
import { useTheme } from "./hooks/useThemes";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Home handleToogleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
