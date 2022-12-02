import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import { Counter, Home } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <Counter/>
    </ThemeProvider>
  );
}

export default App;
