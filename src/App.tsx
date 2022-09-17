import { Home } from './pages/Home';
import { ThemeProvider } from 'styled-components';

// HOOKS
import { useTheme } from './hooks/useThemes';

// STYLES
import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/global';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Home handleToogleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
