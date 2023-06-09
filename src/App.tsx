import { ThemeProvider } from 'styled-components';

import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme.ts';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
