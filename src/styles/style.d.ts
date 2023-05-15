import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Blue: string;
      Red: string;
      White: string;
      Grey100: string;
      Grey200: string;
      Grey300: string;
      Grey400: string;
      Grey500: string;
      Grey600: string;
    };
    fonts: {
      Title1: SerializedStyles;
      Title2: SerializedStyles;
      Title3: SerializedStyles;
      Title4: SerializedStyles;
      Title5: SerializedStyles;
      Body1: SerializedStyles;
      Body2: SerializedStyles;
      Body3: SerializedStyles;
      Body4: SerializedStyles;
      Body5: SerializedStyles;
      Body6: SerializedStyles;
    };
  }
}
