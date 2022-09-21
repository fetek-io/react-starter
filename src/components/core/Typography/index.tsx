import { createStyles, Text, TextProps } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  text: {
    color: theme.colors.subtitle,
  },
}));

export function SubTitle(props: TextProps) {
  const { classes } = useStyles();
  return (
    <Text {...props} weight={500} size={props?.size ?? 'md'} className={classes.text}>
      {props.children}
    </Text>
  );
}
