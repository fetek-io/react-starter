import {
  Header,
  Burger,
  MediaQuery,
  useMantineTheme,
  Group,
  Button,
  useMantineColorScheme,
  ActionIcon,
  Menu,
  Text,
} from '@mantine/core';
import logo from '@/assets/images/logo/horizontal-logo.svg';
import { SubTitle } from '../core/Typography';
import {
  IconSun,
  IconMoonStars,
  IconUserCircle,
  IconBriefcase,
  IconChevronDown,
} from '@tabler/icons';
import { MenuItem } from '../core/mixed/MenuItem';

interface Props {
  opened: boolean;
  handleOpen: (status: boolean) => void;
}

export default function HeaderAction({ opened, handleOpen }: Props) {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = colorScheme === 'dark';
  return (
    <Header height={70} p="md">
      <div className="h-full flex items-center">
        <Group position="apart" className="w-full">
          <Group>
            <img src={logo} alt="logo" style={{ maxWidth: '60px', height: 'auto' }} />
            <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
              <div>
                <SubTitle size={'sm'}>#1 Job Board for tech industry in Europe</SubTitle>
              </div>
            </MediaQuery>
            <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
              <ActionIcon size={35} variant="default" onClick={() => toggleColorScheme()}>
                {dark ? <IconSun size={20} /> : <IconMoonStars size={20} />}
              </ActionIcon>
            </MediaQuery>
          </Group>
          <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
            <Group>
              <MenuItem active={true}>Offers</MenuItem>
              <MenuItem>Brand Stories</MenuItem>
              <MenuItem>Geek</MenuItem>
              <MenuItem>Matchmaking</MenuItem>
              <Button variant="default" color="gray">
                Post a Job
              </Button>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Button color={'default'}>
                    Sign in&nbsp;
                    <IconChevronDown size={14} />
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item icon={<IconUserCircle size={18} />}>Sign in as a developer</Menu.Item>
                  <Menu.Item icon={<IconBriefcase size={18} />}>
                    Sign in to Employer Panel
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Group>
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <Button variant="default" color="gray" className="border-none">
                      USD
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Select your currency</Menu.Label>
                    <Menu.Item>USD</Menu.Item>
                    <Menu.Item>VND</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                <Burger
                  opened={opened}
                  onClick={() => handleOpen(!opened)}
                  size="sm"
                  color={theme.colors.gray[6]}
                />
              </Group>
            </Group>
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Group>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Button color={'default'}>
                    Sign in&nbsp;
                    <IconChevronDown size={14} />
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item icon={<IconUserCircle size={18} />}>Sign in as a developer</Menu.Item>
                  <Menu.Item icon={<IconBriefcase size={18} />}>
                    Sign in to Employer Panel
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Group>
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <Button variant="default" color="gray" className="border-none">
                      USD
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Select your currency</Menu.Label>
                    <Menu.Item>USD</Menu.Item>
                    <Menu.Item>VND</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                <Burger
                  opened={opened}
                  onClick={() => handleOpen(!opened)}
                  size="sm"
                  color={theme.colors.gray[6]}
                />
              </Group>
            </Group>
          </MediaQuery>
        </Group>
      </div>
    </Header>
  );
}
