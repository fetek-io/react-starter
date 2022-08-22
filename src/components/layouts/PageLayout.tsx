import { AppShell, Header, useMantineColorScheme } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useStyles } from './PageLayout.styles';
import { useTranslation } from 'react-i18next';

export default function PageLayout() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { i18n } = useTranslation();
  const { classes } = useStyles();
  const dark = colorScheme === 'dark';

  return (
    <div>
      <AppShell
        padding="md"
        navbar={<Navigation />}
        header={
          <Header height={60} p="xs" className={classes.header}>
            <p onClick={() => toggleColorScheme()}>
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </p>
            <p onClick={() => i18n.changeLanguage('en')}>
              EN
            </p>
            <p onClick={() => i18n.changeLanguage('vi')}>
              VI
            </p>
          </Header>
        }
      >
        <Outlet />
      </AppShell>
    </div>
  );
}
