import { useRoutes } from 'react-router-dom';
import { routes } from './configs/router';
import { ColorScheme, ColorSchemeProvider, Global, MantineProvider } from '@mantine/core';
import { darkTheme, theme } from './configs/theme';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CustomFonts } from '@/configs/fonts';
import { NotificationsProvider } from '@mantine/notifications';

function MyGlobalStyles() {
  return (
    <Global
      styles={() => ({
        '*, *::before, *::after': { boxSizing: 'border-box' },
        '.mantine-AppShell-main': {
          paddingLeft: 'calc(var(--mantine-navbar-width, 0px))',
          paddingTop: 'calc(var(--mantine-header-height, 0px))',
          paddingRight: 0,
        },
        // ...other global styles
      })}
    />
  );
}

function App() {
  const element = useRoutes(routes);
  const queryClient = new QueryClient();

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const dark = colorScheme === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={dark ? darkTheme : theme} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <CustomFonts />
            <MyGlobalStyles />
            {element}
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  );
}

export default App;
