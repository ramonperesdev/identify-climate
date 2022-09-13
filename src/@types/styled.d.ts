import "styled-components";
import { lightTheme } from "../styles/themes";
type IThemes = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends IThemes {}
}
