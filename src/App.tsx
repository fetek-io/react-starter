import { useRoutes } from 'react-router-dom';
import { routes } from './configs/router';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { darkTheme, theme } from './configs/theme';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const element = useRoutes(routes);
  const queryClient = new QueryClient()

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const dark = colorScheme === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={dark ? darkTheme : theme} withGlobalStyles withNormalizeCSS>
        {element}
      </MantineProvider>
    </ColorSchemeProvider>
    </QueryClientProvider>
  );
}

export default App;
