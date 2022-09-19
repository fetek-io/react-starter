import { useMobileDetect } from '@/hooks/useMobileDetect';
import {
  AppShell,
  // Header, useMantineColorScheme
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
// import Navigation from './Navigation';
// import { IconSun, IconMoonStars } from '@tabler/icons';
// import { useStyles } from './PageLayout.styles';
// import { useTranslation } from 'react-i18next';
import HeaderAction from './Header';
import NavbarNested from './NavBar';

export default function PageLayout() {
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const { i18n } = useTranslation();
  // const { classes } = useStyles();
  // const dark = colorScheme === 'dark';

  const isMobile = useMobileDetect();

  return (
    <div>
      <AppShell
        padding="xl"
        navbar={<NavbarNested />}
        header={isMobile ? <HeaderAction /> : undefined}
      >
        <Outlet />
      </AppShell>
    </div>
  );
}
