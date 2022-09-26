import { createStyles, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  active: {
    color: theme.colors.active,
  },
  text: {
    color: theme.colors.subtitle,
  },
}));

export function MenuItem(props: any) {
  const { classes } = useStyles();
  return (
    <Text
      {...props}
      weight={500}
      size={props?.size ?? 'md'}
      className={props.active ? classes.active : classes.text}
    >
      {props.children}
    </Text>
  );
}
