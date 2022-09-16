import { useEffect, useState } from "react";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import useGetTheme from "../../utils/getTheme";

import { SwitchContainer, SwitchHandleAni } from "./styles";

interface ISwitchToggleThemeProps {
  /**
   * @description Function responsible for changing the theme
   */
  handleToogleTheme: () => void;
}

export function SwitchToggleTheme({
  handleToogleTheme,
}: ISwitchToggleThemeProps) {
  const theme = useGetTheme();

  const toggleSwitch = () => {
    handleToogleTheme();
  };

  return (
    <SwitchContainer
      className="switch"
      data-theme={theme?.value}
      data-testid="switch-container"
      isDark={theme?.value === "dark"}
      onClick={toggleSwitch}
    >
      <SwitchHandleAni className="handle">
        {theme?.value === "dark" ? <BsFillMoonFill /> : <BsFillSunFill />}
      </SwitchHandleAni>
    </SwitchContainer>
  );
}
