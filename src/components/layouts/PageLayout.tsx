import { useMobileDetect } from '@/hooks/useMobileDetect';
import {
  ActionIcon,
  AppShell,
  Box,
  Container,
  Divider,
  Group,
  Paper,
  TextInput,
  Title,
  // Header,
  useMantineColorScheme,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { SubTitle } from '../core/Typography';
// import Navigation from './Navigation';
// import {  } from '@tabler/icons';
// import { useStyles } from './PageLayout.styles';
// import { useTranslation } from 'react-i18next';
import HeaderAction from './Header';
import NavbarNested from './NavBar';
import { IconSearch, IconSun, IconMoonStars } from '@tabler/icons';

export default function PageLayout() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const { i18n } = useTranslation();
  // const { classes } = useStyles();
  const dark = colorScheme === 'dark';

  const isMobile = useMobileDetect();

  return (
    <div>
      <AppShell
        padding="xl"
        navbar={<NavbarNested />}
        header={isMobile ? <HeaderAction /> : undefined}
      >
        {!isMobile && (
          <Box className="flex justify-between" style={{ margin: '-10px' }}>
            <Box>
              <Title order={4}>Dashboard</Title>
              <SubTitle>You’ve got 24 New Customers</SubTitle>
            </Box>
            <Group>
              <TextInput
                placeholder="Search"
                icon={<IconSearch size={16} />}
                rightSectionWidth={90}
                styles={{ rightSection: { pointerEvents: 'none' } }}
              />
              <ActionIcon size={35} variant="default" onClick={() => toggleColorScheme()}>
                {dark ? <IconSun size={20} /> : <IconMoonStars size={20} />}
              </ActionIcon>
            </Group>
          </Box>
        )}
        <Container fluid className="pt-12">
          <Outlet />
        </Container>
      </AppShell>
    </div>
  );
}
