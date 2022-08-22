import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  header: {
    backgroundColor: theme.colors.background[0],
    display: 'flex'
  },
}));
