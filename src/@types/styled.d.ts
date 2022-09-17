import 'styled-components';
import { lightTheme } from '../styles/themes';
type IThemes = { [key in keyof typeof lightTheme]: string };
declare module 'styled-components' {
  export interface DefaultTheme extends IThemes {}
}
