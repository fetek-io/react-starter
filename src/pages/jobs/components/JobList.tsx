import {
  Box,
  Paper,
  Stack,
  Group,
  Image,
  Title,
  Text,
  Space,
  Badge,
  createStyles,
  Center,
  Tooltip,
  Tabs,
  ScrollArea,
  Menu,
  Button,
  Switch,
} from '@mantine/core';
import { offers } from '@/utils/mockdata';
import { IconMapPin, IconBuilding, IconChevronUp } from '@tabler/icons';

const useStyles = createStyles((theme, _params, getRef) => ({
  ellipsis: {
    width: '50px',
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  subtitle: {
    color: theme.colors.subtitle,
  },
  salary: {
    color: theme.colors.green[5],
  },
  tabs: {
    backgroundColor: theme.colors.tabBackground,
    marginLeft: '-9px',
    marginTop: '-9px',
    marginRight: '-9px',
    paddingLeft: '32px',
  },
  tabAction: {
    position: 'absolute',
    right: 0,
    top: '-3px',
  },
  paper: {
    backgroundColor: theme.colors.paper,
  },
  job: {
    backgroundColor: theme.colors.jobBackground,
  },
  tabList: {
    [`& .${getRef('child')}[data-active]`]: {
      backgroundColor: `${theme.colors.jobBackground} !important`,
      color: theme.colors.text,
    },
  },
  child: {
    // assign ref to element
    ref: getRef('child'),
  },
}));

export default function JobList() {
  const { classes, cx } = useStyles();
  return (
    <Box>
      <div style={{ position: 'relative' }}>
        <Tabs
          color="#101113"
          variant="pills"
          defaultValue="gallery"
          className={cx('mb-2', classes.tabs)}
          style={{ height: '30px' }}
        >
          <Tabs.List className={classes.tabList}>
            <Tabs.Tab value="gallery" className={classes.child}>
              Offers with salary
            </Tabs.Tab>
            <Tabs.Tab value="messages" className={classes.child}>
              All offers
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <Group position="apart" className={cx(classes.tabAction)}>
          <Switch value="remote" label="Remote" />
          <Menu shadow="md" width={200} position="right-end">
            <Menu.Target>
              <Button
                variant="default"
                color="gray"
                className="border-none"
                style={{ backgroundColor: 'unset' }}
              >
                Latest&nbsp;
                <IconChevronUp size={10} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Latest</Menu.Item>
              <Menu.Item>Highest salary</Menu.Item>
              <Menu.Item>Lowest salary</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </div>

      {/* header: 70px, nav: 100px, tabs: 30px */}
      <ScrollArea style={{ height: 'calc(100vh - 70px - 100px - 30px)' }}>
        <Stack>
          {offers.map((item, index) => (
            <Paper key={index} shadow="xs" p="md" className={classes.paper}>
              <Group position="apart">
                <Group position="apart">
                  <Center style={{ width: '70px', height: '77px', background: 'white' }}>
                    <Image
                      src={item.company_logo_url}
                      alt={item.company_name}
                      style={{ maxWidth: '50px', height: 'auto' }}
                    />
                  </Center>

                  <Box>
                    <Title order={5} className="mb-2">
                      {item.title}
                    </Title>
                    <div className="flex">
                      <Tooltip label={item.company_name}>
                        <Text size="sm" className={cx(classes.ellipsis, classes.subtitle)}>
                          <IconBuilding size={10} />
                          &nbsp;{item.company_name}
                        </Text>
                      </Tooltip>
                      <Space w="xs" />
                      <Text size="sm" className={cx(classes.subtitle)}>
                        <IconMapPin size={10} />
                        &nbsp;{item.city}
                      </Text>
                      <Space w="xs" />
                      <Badge color="red" size="xs" className="mt-1">
                        {item.workplace_type}
                      </Badge>
                    </div>
                  </Box>
                </Group>
                <Box>
                  <Group position="right" className="mb-2">
                    <Title order={5} className={classes.salary}>
                      {item.employment_types[0]?.salary?.from}&nbsp;-&nbsp;
                      {item.employment_types[0]?.salary?.to}&nbsp;
                      {item.employment_types[0]?.salary?.currency}
                    </Title>

                    <Badge color="gray" radius="lg" size="xs" className="mt-1">
                      New
                    </Badge>
                  </Group>
                  <Group position="right">
                    {item.skills.map((skill, i) => (
                      <Tooltip label={skill.name} key={i}>
                        <Badge
                          className={classes.ellipsis}
                          color="gray"
                          radius="lg"
                          variant="outline"
                          size="xs"
                        >
                          {skill.name}
                        </Badge>
                      </Tooltip>
                    ))}
                  </Group>
                </Box>
              </Group>
            </Paper>
          ))}
        </Stack>
      </ScrollArea>
    </Box>
  );
}
