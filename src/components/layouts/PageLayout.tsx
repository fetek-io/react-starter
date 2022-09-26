import { AppShell, Navbar, Text, Footer, useMantineTheme, Container } from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router';
import HeaderAction from './Header';

export default function PageLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const handleOpen = (status: boolean) => {
    setOpened(status);
  };
  return (
    <div>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={<HeaderAction opened={opened} handleOpen={handleOpen} />}
      >
        <Container fluid>
          <Outlet />
        </Container>
      </AppShell>
    </div>
  );
}
