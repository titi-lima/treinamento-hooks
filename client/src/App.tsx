import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import { Home } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
