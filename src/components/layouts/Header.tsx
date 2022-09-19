import {
  createStyles,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Drawer,
  Navbar,
  Code,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantine/ds';

import { LinksGroup } from '../core/LinksGroup';
import { UserButton } from '../core/UserButton';
import { mockdata } from '@/utils/mockdata';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  //   nav bar

  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  navlinks: {
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

export default function HeaderAction() {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          My Logo
        </Group>

        <Button radius="xl" sx={{ height: 30 }}>
          Get early access
        </Button>
      </Container>
      <Drawer opened={opened} onClose={toggle} title="Register" padding="xl" size="75%">
        <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
          <Navbar.Section className={classes.header}>
            <Group position="apart">
              Logo
              {/* <Logo width={120} /> */}
              <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
            </Group>
          </Navbar.Section>

          <Navbar.Section grow className={classes.navlinks} component={ScrollArea}>
            <div className={classes.linksInner}>{links}</div>
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>
            <UserButton
              image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              name="Ann Nullpointer"
              email="anullpointer@yahoo.com"
            />
          </Navbar.Section>
        </Navbar>
      </Drawer>
    </Header>
  );
}
