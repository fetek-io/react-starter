import { createStyles, Grid } from '@mantine/core';
import JobList from './components/JobList';
import JobMap from './components/JobMap';
import NavigationBar from './components/Navigation';

const useStyles = createStyles((theme) => ({
  ellipsis: {
    width: '50px',
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  job: {
    backgroundColor: theme.colors.jobBackground,
  },
  gridFluid: {
    marginLeft: '-30px',
  },
}));

export default function JobsBoard() {
  const { classes } = useStyles();
  return (
    <>
      <NavigationBar />
      <Grid className={classes.gridFluid}>
        <Grid.Col span={5} className={classes.job}>
          <JobList />
        </Grid.Col>
        <Grid.Col span={7}>
          <JobMap />
        </Grid.Col>
      </Grid>
    </>
  );
}
