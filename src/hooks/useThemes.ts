import { useEffect, useState } from 'react';

interface IUseThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export function useTheme(): IUseThemeProps {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    localTheme && setTheme(localTheme);
  }, []);

  return { theme, toggleTheme };
}
