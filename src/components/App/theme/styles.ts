import 'styled-components';
import { Theme } from '@mui/material/styles';
import {ITheme} from "./theme";


declare module '@mui/material/styles' {
    interface Theme extends ITheme {}
    interface ThemeOptions extends ITheme {}
}
// @ts-ignore
declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}