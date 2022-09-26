import { Box, Button, Group, Input, createStyles, Grid } from '@mantine/core';
import {
  IconAdjustmentsHorizontal,
  IconChevronDown,
  IconSearch,
  IconArrowLeft,
} from '@tabler/icons';
import React, { useEffect, useRef, useState } from 'react';
import AllJobs from './AllJobs';

const useStyles = createStyles(() => ({
  search: {
    width: '100px',
    transition: 'width 300ms ease 0s',
  },
  fade: {
    width: '80%',
  },

  job: {
    opacity: 1,
    overflow: 'hidden',
    pointerEvents: 'initial',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex: '1 1 0%',
    flexFlow: 'row nowrap',
    zIndex: 'unset',
    transition: 'opacity 300ms ease 0s',
  },

  jobFade: {
    opacity: 0,
    pointerEvents: 'none',
  },
}));

export default function NavigationBar() {
  const { classes, cx } = useStyles();
  const [fade, setFade] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      const current = ref.current as any;
      if (fade && current && !current.contains(e.target)) {
        setFade(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [fade]);

  return (
    <Grid style={{ height: '100px' }}>
      <Grid.Col span={10}>
        <Group position="apart">
          <Box
            ref={ref}
            className={cx(classes.search, fade ? classes.fade : undefined)}
            onClick={() => {
              setFade(!fade);
            }}
          >
            <Input
              icon={fade ? <IconArrowLeft /> : <IconSearch />}
              placeholder={fade ? 'Skill, location, company' : 'Search'}
              className="w-full"
              variant={!fade ? 'filled' : undefined}
            />
          </Box>

          <Group position="apart" className={cx(classes.job, fade ? classes.jobFade : undefined)}>
            <Button variant={'default'} className="self-center">
              Location &nbsp;
              <IconChevronDown size={16} />
            </Button>
            {/* all jobs */}
            <AllJobs />
          </Group>
        </Group>
      </Grid.Col>
      <Grid.Col span={2} className="flex items-center justify-end">
        <Box>
          <Button variant={'default'}>
            <IconAdjustmentsHorizontal size={16} />
            &nbsp;More filters &nbsp;
            <IconChevronDown size={16} />
          </Button>
        </Box>
      </Grid.Col>
    </Grid>
    // <Group position="apart">

    // </Group>
  );
}
