/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components/native';
import theme from '@/theme';

type ThemeType = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
