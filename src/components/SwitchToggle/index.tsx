import { useState } from "react";

import { ReactComponent as Moon } from "../../assets/moon-light.svg";
import { ReactComponent as Sun } from "../../assets/sun-light.svg";
import { useTheme } from "../../hooks/useThemes";

import { SwitchContainer, SwitchHandleAni } from "./styles";

interface ISwitchToggleThemeProps {
  handleToogleTheme: () => void;
}

export function SwitchToggleTheme({
  handleToogleTheme,
}: ISwitchToggleThemeProps) {
  const { theme } = useTheme();
  const [isDark, setisDark] = useState(false);

  const toggleSwitch = () => {
    // setisDark(!isDark);
    handleToogleTheme();
  };

  return (
    <SwitchContainer
      className="switch"
      isDark={theme === "dark" ? true : false}
      
      onClick={toggleSwitch}
    >
      <SwitchHandleAni className="handle">
        {theme === "dark" ? <Moon /> : <Sun />}
      </SwitchHandleAni>
    </SwitchContainer>
  );
}
