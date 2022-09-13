import { useState } from "react";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { SwitchContainer, SwitchHandleAni } from "./styles";

interface ISwitchToggleThemeProps {
  handleToogleTheme: () => void;
}

export function SwitchToggleTheme({
  handleToogleTheme,
}: ISwitchToggleThemeProps) {
  const [isDark, setisDark] = useState(false);

  const toggleSwitch = () => {
    setisDark(!isDark);
    handleToogleTheme();
  };

  return (
    <SwitchContainer
      className="switch"
      data-testid="switch-container"
      isDark={isDark}
      onClick={toggleSwitch}
    >
      <SwitchHandleAni className="handle">
        {isDark ? <BsFillMoonFill /> : <BsFillSunFill />}
      </SwitchHandleAni>
    </SwitchContainer>
  );
}
