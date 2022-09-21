import { createStyles, Paper, Title } from '@mantine/core';
import { ReactNode } from 'react';
import { SubTitle } from '@/components/core/Typography';
import cls from 'classnames';

interface Props {
  titleTxt?: string;
  titleNode?: ReactNode;
  subtitleTxt?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.card,
  },
}));

function ChartPaper({ titleTxt, titleNode, subtitleTxt, children, style }: Props) {
  const { classes } = useStyles();

  return (
    <Paper shadow="sm" radius="md" p="lg" withBorder className={cls(classes.card)} style={style}>
      {titleNode ? titleNode : <Title order={3}>{titleTxt}</Title>}
      <SubTitle>{subtitleTxt}</SubTitle>
      {children}
    </Paper>
  );
}

export default ChartPaper;
