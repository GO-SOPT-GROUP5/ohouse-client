import { css, DefaultTheme } from "styled-components";

const colors = {
  Blue: '#33C5EF',
  Red: '#F57272',
  White: '#FFFFFF',
  Grey100: '#F6F9FA',
  Grey200: '#EAEDEF',
  Grey300: '#C2C8CC',
  Grey400: '#838D95',
  Grey500: '#424242',
  Grey600: '#2F3438',
};

const fonts = {
  Title1: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.6rem;
  `,
  Title2: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 3.4rem;
  `,
  Title3: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 2.6rem;
  `,
  Title4: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
  `,
  Title5: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.1rem;
  `,

  Body1: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.1rem;
  `,
  Body2: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.1rem;
    letter-spacing: -0.01rem;
  `,
  Body3: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.2rem;
  `,
  Body4: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  `,
  Body5: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: -0.025rem;
  `,
  Body6: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.2rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
