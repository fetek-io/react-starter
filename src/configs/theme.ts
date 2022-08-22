import { darkMode, lightMode } from '@/styles/colors';
import { MantineThemeColorsOverride, MantineThemeOverride } from '@mantine/core';

export const theme = {
  colorScheme: 'light',
  focusRing: 'auto',

  cursorType: 'default',

  white: '#fff',
  black: '#000',

  colors: lightMode as MantineThemeColorsOverride,
  // colors: {
  //   background: ['#fff']
  // },

  // primaryColor: '#3308A8',

  // font-family and line-height used in most components
  fontFamily: 'Roboto, sans-serif',
  //   lineHeight: string | number,

  // Sizes for corresponding properties
  //   fontSizes: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>,
  //   radius: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>,
  //   spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>,

  // h1-h6 styles, used in Title and TypographyStylesProvider components
  //   headings: {
  //     fontFamily: CSSProperties['fontFamily'],
  //     fontWeight: CSSProperties['fontWeight'],
  //     sizes: {
  //       // See heading options below
  //       h1: Heading,
  //       h2: Heading,
  //       h3: Heading,
  //       h4: Heading,
  //       h5: Heading,
  //       h6: Heading,
  //     },
  //   },

  // theme functions, see in theme functions guide
  //   fn: MantineThemeFunctions,

  // Default date format used in DatePicker and DateRangePicker components
  //   dateFormat: string,

  // Default dates formatting locale used in every @mantine/dates component
  //   datesLocale: string,
} as MantineThemeOverride;

export const darkTheme = {
  colorScheme: 'dark',
  focusRing: 'auto',

  cursorType: 'default',

  white: '#fff',
  black: '#000',

  colors: darkMode as MantineThemeColorsOverride,
  // colors: {
  //   background: ['#000']
  // },

  // primaryColor: '#3308A8',

  // font-family and line-height used in most components
  fontFamily: 'Roboto, sans-serif',
  //   lineHeight: string | number,

  // Sizes for corresponding properties
  //   fontSizes: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>,
  //   radius: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>,
  //   spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>,

  // h1-h6 styles, used in Title and TypographyStylesProvider components
  //   headings: {
  //     fontFamily: CSSProperties['fontFamily'],
  //     fontWeight: CSSProperties['fontWeight'],
  //     sizes: {
  //       // See heading options below
  //       h1: Heading,
  //       h2: Heading,
  //       h3: Heading,
  //       h4: Heading,
  //       h5: Heading,
  //       h6: Heading,
  //     },
  //   },

  // theme functions, see in theme functions guide
  //   fn: MantineThemeFunctions,

  // Default date format used in DatePicker and DateRangePicker components
  //   dateFormat: string,

  // Default dates formatting locale used in every @mantine/dates component
  //   datesLocale: string,
} as MantineThemeOverride;
