import { useTheme } from "styled-components";

export default function useGetTheme() {
  const theme = useTheme();

  return theme;
}
