import { createTheme, Theme } from '@mui/material/styles';

type TCustomColors = {
  main: {
    backgroundBody: string;
    starFalse: string;
    starTrue: string;
    fontDescriptions: string;
    link: string;
  };
  font: {};
  background: {};
  accent: {};
  colors: {};
  other: {};
};
declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom?: TCustomColors;
  }
  interface Palette {
    custom?: TCustomColors;
  }
}
declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export enum AppColor {
  BackgroundBode = '#EFEFEF',
  StarFalse = '#0000008a',
  StarTrue = '#F2C94C',
  FontDescriptions = '#8D8D8D',
  Link = '#2D9CDB',
}

export const createAppTheme = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          fallbacks: [
            {
              '@font-face': {
                fontFamily: 'Roboto',
                fontWeight: '400',
              },
            },
          ],
        },
      },
    },
    palette: {
      custom: {
        main: {
          backgroundBody: AppColor.BackgroundBode,
          starFalse: AppColor.StarFalse,
          starTrue: AppColor.StarTrue,
          fontDescriptions: AppColor.FontDescriptions,
          link: AppColor.Link,
        },
        font: {},
        background: {},
        colors: {},
        accent: {},
        other: {},
      },
    },
  });
  return theme;
};
