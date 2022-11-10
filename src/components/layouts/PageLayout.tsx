import { useMobileDetect } from '@/hooks/useMobileDetect';
import BreadCrumbs from '@/components/layouts/BreadCrumbs';
import { AppShell, Box, Container, Group, TextInput, Title } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { SubTitle } from '../core/Typography';
import HeaderAction from './Header';
import LogOut from './LogOut';
import NavbarNested from './NavBar';
import { IconSearch } from '@tabler/icons';

export default function PageLayout() {
  const isMobile = useMobileDetect();

  return (
    <div>
      <AppShell
        padding="xl"
        navbar={<NavbarNested />}
        header={isMobile ? <HeaderAction /> : undefined}
      >
        <Container fluid className="pt-0 pl-0 pr-0">
          <Box className="flex justify-between pa-2">
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
              {/* <ActionIcon size={35} variant="default" onClick={() => toggleColorScheme()}>
                {dark ? <IconSun size={20} /> : <IconMoonStars size={20} />}
              </ActionIcon> */}
              <Box>
                <LogOut />
              </Box>
            </Group>
          </Box>
          <BreadCrumbs />
          <Box className="p-2">
            <Outlet />
          </Box>
        </Container>
      </AppShell>
    </div>
  );
}
