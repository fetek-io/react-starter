import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  // header: {
  //   backgroundColor: theme.colors.background[0],
  //   display: 'flex',
  // },
  app: {
    paddingLeft: 'calc(var(--mantine-navbar-width, 0px))',
    paddingTop: 'calc(var(--mantine-header-height, 0px))',
  },
}));
