import {
  Navbar,
  Group,
  useMantineColorScheme,
  ScrollArea,
  createStyles,
  Grid,
} from '@mantine/core';
import { LinksGroup } from '../core/LinksGroup';
import { UserButton } from '../core/UserButton';
import { MenuLeft, mockdata } from '@/utils/mockdata';
import avatar from '@/assets/images/logo/logo-no-name.svg';
import logo from '@/assets/images/logo/horizontal-logo.svg';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { Link, useLocation } from 'react-router-dom';
import { map } from 'lodash';
// import HeaderAction from './Header';
const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    top: 0,
  },

  header: {
    padding: theme.spacing.xl,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

function checkNavOpenStatus(links?: { label: string; link: string }[], pathname?: string) {
  let hasLink = false;
  if (links && pathname) {
    const linkArr = links?.map((link: { label: string; link: string }) => link?.link);

    linkArr.forEach((item) => {
      if (pathname.includes(item)) {
        hasLink = true;
      }
    });
  }
  return hasLink;
}

export default function NavbarNested() {
  const { classes } = useStyles();
  const { pathname } = useLocation();
  const links = MenuLeft.map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
      initiallyOpened={checkNavOpenStatus(item.links, pathname)}
    />
  ));
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <>
      <Navbar
        width={{ sm: 300 }}
        p="md"
        hiddenBreakpoint="sm" // Breakpoint at which component will be hidden if hidden prop is true
        hidden={true}
        className={classes.navbar}
      >
        <Navbar.Section className={classes.header}>
          <Group position="apart">
            {/* <HeaderAction /> */}
            <Grid>
              <Grid.Col span={6}>
                <Link to={'/'}>
                  <img src={logo} alt="logo" style={{ maxWidth: '60px', height: 'auto' }} />
                </Link>
              </Grid.Col>
              <Grid.Col span={6}></Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={6}></Grid.Col>
              <Grid.Col span={6}>
                <span onClick={() => toggleColorScheme()}>
                  {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                </span>
              </Grid.Col>
            </Grid>
          </Group>
        </Navbar.Section>

        <Navbar.Section grow className={classes.links} component={ScrollArea}>
          <div className={classes.linksInner}>{links}</div>
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          <UserButton image={avatar} name="Ann Nullpointer" email="anullpointer@yahoo.com" />
        </Navbar.Section>
      </Navbar>
    </>
  );
}
