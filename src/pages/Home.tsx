import ChartPaper from '@/components/chart/ChartPaper';
import { SubTitle } from '@/components/core/Typography';
import {
  BackgroundImage,
  Box,
  Button,
  Center,
  createStyles,
  Grid,
  Paper,
  Timeline,
  Title,
  Image,
  Text,
  Stack,
  ActionIcon,
  ScrollArea,
  Progress,
  Tabs,
  Badge,
  Avatar,
  Group,
} from '@mantine/core';
import ReactApexChart from 'react-apexcharts';
import { IconArrowRight } from '@tabler/icons';

const state = {
  series: [44, 55, 41],
  options: {
    legend: {
      show: true,
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
  },
};

const state2 = {
  series: [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
};
const state3 = {
  series: [
    {
      name: 'Cash Flow',
      data: [
        1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07, 5.8,
        2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1,
        -39.6, -37.6, -29.4, -21.4, -2.4,
      ],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: -46,
              color: '#F15B46',
            },
            {
              from: -45,
              to: 0,
              color: '#FEB019',
            },
          ],
        },
        columnWidth: '80%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      title: {
        text: 'Growth',
      },
      labels: {
        formatter: function (y) {
          return y.toFixed(0) + '%';
        },
      },
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2011-01-01',
        '2011-02-01',
        '2011-03-01',
        '2011-04-01',
        '2011-05-01',
        '2011-06-01',
        '2011-07-01',
        '2011-08-01',
        '2011-09-01',
        '2011-10-01',
        '2011-11-01',
        '2011-12-01',
        '2012-01-01',
        '2012-02-01',
        '2012-03-01',
        '2012-04-01',
        '2012-05-01',
        '2012-06-01',
        '2012-07-01',
        '2012-08-01',
        '2012-09-01',
        '2012-10-01',
        '2012-11-01',
        '2012-12-01',
        '2013-01-01',
        '2013-02-01',
        '2013-03-01',
        '2013-04-01',
        '2013-05-01',
        '2013-06-01',
        '2013-07-01',
        '2013-08-01',
        '2013-09-01',
      ],
      labels: {
        rotate: -90,
      },
    },
  },
};

const state4 = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'Germany',
      ],
    },
  },
};
const useStyles = createStyles((theme) => ({
  image: {
    backgroundColor: theme.colorScheme === 'dark' ? '#2B2B40' : '#E8E5DD',
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <>
      {/* ///////////////////////////////// */}
      <Grid>
        <Grid.Col lg={4} xs={12}>
          <ChartPaper
            titleTxt="69,700"
            subtitleTxt="Expected Earnings"
            style={{ minHeight: '287px' }}
          >
            <Center>
              <ReactApexChart options={state.options} series={state.series} type="donut" />
            </Center>
          </ChartPaper>
        </Grid.Col>
        <Grid.Col lg={8} xs={12}>
          <Paper
            shadow="sm"
            radius="md"
            withBorder
            className={classes.image}
            style={{ maxHeight: '287px', boxSizing: 'border-box' }}
          >
            <BackgroundImage src="https://preview.keenthemes.com/good/assets/media/misc/city.png">
              <Box style={{ height: '287px' }} className="flex items-center pl-6">
                <div>
                  <Title order={3} className="mb-6">
                    Good admin theme
                    <br /> is a tool of enthusiasm
                  </Title>
                  <Button>Settings</Button>
                </div>
              </Box>
            </BackgroundImage>
          </Paper>
        </Grid.Col>
      </Grid>
      {/* //////////////////////////////////// */}
      <Grid className="mt-2">
        <Grid.Col lg={4} xs={12}>
          <ChartPaper titleTxt="47,07" subtitleTxt="Avg order Value" style={{ minHeight: '287px' }}>
            <ReactApexChart
              options={state2.options}
              series={state2.series}
              type="area"
              height={350}
            />
          </ChartPaper>
        </Grid.Col>
        <Grid.Col lg={8} xs={12}>
          <ChartPaper
            titleTxt="Instagram Subscribers"
            subtitleTxt="75% activity growth"
            style={{ minHeight: '287px' }}
          >
            <ReactApexChart
              options={state3.options}
              series={state3.series}
              type="bar"
              height={350}
            />
          </ChartPaper>
        </Grid.Col>
      </Grid>
      {/* ////////////////////////////// */}
      <Grid className="mt-2">
        <Grid.Col lg={4} xs={12}>
          <ChartPaper
            titleTxt={'PopuLar Products'}
            subtitleTxt="Latest bestsellers"
            style={{ minHeight: '287px' }}
          >
            <ScrollArea style={{ height: '365px' }}>
              <Grid className="mt-6 ">
                <Grid.Col span={10} className="flex items-center justify-between">
                  <Box className="flex items-center">
                    <Image
                      width={80}
                      height={80}
                      fit="contain"
                      src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80"
                    />

                    <Stack className="ml-2">
                      <Title order={4}>Slack</Title>
                      <SubTitle size="xs">Messenger</SubTitle>
                    </Stack>
                  </Box>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Box style={{ paddingTop: '50%' }}>
                    <Progress value={50} className="m-auto" />
                  </Box>
                </Grid.Col>
              </Grid>
              <Grid className="mt-6 ">
                <Grid.Col span={10} className="flex items-center justify-between">
                  <Box className="flex items-center">
                    <Image
                      width={80}
                      height={80}
                      fit="contain"
                      src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80"
                    />

                    <Stack className="ml-2">
                      <Title order={4}>Slack</Title>
                      <SubTitle size="xs">Messenger</SubTitle>
                    </Stack>
                  </Box>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Box style={{ paddingTop: '50%' }}>
                    <Progress value={50} className="m-auto" />
                  </Box>
                </Grid.Col>
              </Grid>
              <Grid className="mt-6 ">
                <Grid.Col span={10} className="flex items-center justify-between">
                  <Box className="flex items-center">
                    <Image
                      width={80}
                      height={80}
                      fit="contain"
                      src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80"
                    />

                    <Stack className="ml-2">
                      <Title order={4}>Slack</Title>
                      <SubTitle size="xs">Messenger</SubTitle>
                    </Stack>
                  </Box>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Box style={{ paddingTop: '50%' }}>
                    <Progress value={50} className="m-auto" />
                  </Box>
                </Grid.Col>
              </Grid>
              <Grid className="mt-6 ">
                <Grid.Col span={10} className="flex items-center justify-between">
                  <Box className="flex items-center">
                    <Image
                      width={80}
                      height={80}
                      fit="contain"
                      src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80"
                    />

                    <Stack className="ml-2">
                      <Title order={4}>Slack</Title>
                      <SubTitle size="xs">Messenger</SubTitle>
                    </Stack>
                  </Box>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Box style={{ paddingTop: '50%' }}>
                    <Progress value={50} className="m-auto" />
                  </Box>
                </Grid.Col>
              </Grid>
            </ScrollArea>
          </ChartPaper>
        </Grid.Col>
        <Grid.Col lg={8} xs={12}>
          <ChartPaper
            titleNode={
              <Tabs radius="xs" defaultValue="gallery">
                <Tabs.List>
                  <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
                  <Tabs.Tab value="messages">Messages</Tabs.Tab>
                  <Tabs.Tab value="settings">Settings</Tabs.Tab>
                </Tabs.List>
              </Tabs>
            }
            style={{ minHeight: '287px' }}
          >
            <ScrollArea style={{ height: '365px' }} className="mt-6">
              <Box className="mt-6 ">
                <Box className="flex items-center justify-between">
                  <Box className="border-l-4 border-amber-500">
                    <Stack className="ml-2">
                      <Title order={4}>BlueSky Apartments</Title>
                      <SubTitle size="xs">Most Successful Fellas</SubTitle>
                    </Stack>
                  </Box>

                  <Box>
                    <Stack className="ml-2">
                      <div className="d-flex gap-2 mb-2">
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/facebook-4.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/twitter-2.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/linkedin-2.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/youtube-3.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                      </div>
                      <SubTitle size="xs">Labor 24 - 35 years</SubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Badge color="green">Live Now</Badge>
                  </Box>
                  <Box>
                    <Stack className="ml-2">
                      <Group className="symbol-group symbol-hover mb-1">
                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-6.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-5.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-25.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-9.jpg"
                            alt=""
                          />
                        </div>
                      </Group>
                      <SubTitle size="xs">Labor 24 - 35 years</SubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack className="ml-2">
                      <Title order={6}>24 Dec 21 - 06 Jan 22</Title>
                      <SubTitle size="xs">Date range</SubTitle>
                    </Stack>
                  </Box>
                  <ActionIcon size={35} variant="default">
                    <IconArrowRight size={20} />
                  </ActionIcon>
                </Box>
              </Box>
              <Box className="mt-6 ">
                <Box className="flex items-center justify-between">
                  <Box className="border-l-4 border-amber-500">
                    <Stack className="ml-2">
                      <Title order={4}>BlueSky Apartments</Title>
                      <SubTitle size="xs">Most Successful Fellas</SubTitle>
                    </Stack>
                  </Box>

                  <Box>
                    <Stack className="ml-2">
                      <div className="d-flex gap-2 mb-2">
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/facebook-4.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/twitter-2.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/linkedin-2.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/youtube-3.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                      </div>
                      <SubTitle size="xs">Labor 24 - 35 years</SubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Badge color="green">Live Now</Badge>
                  </Box>
                  <Box>
                    <Stack className="ml-2">
                      <Group className="symbol-group symbol-hover mb-1">
                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-6.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-5.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-25.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-9.jpg"
                            alt=""
                          />
                        </div>
                      </Group>
                      <SubTitle size="xs">Labor 24 - 35 years</SubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack className="ml-2">
                      <Title order={6}>24 Dec 21 - 06 Jan 22</Title>
                      <SubTitle size="xs">Date range</SubTitle>
                    </Stack>
                  </Box>
                  <ActionIcon size={35} variant="default">
                    <IconArrowRight size={20} />
                  </ActionIcon>
                </Box>
              </Box>
              <Box className="mt-6 ">
                <Box className="flex items-center justify-between">
                  <Box className="border-l-4 border-amber-500">
                    <Stack className="ml-2">
                      <Title order={4}>BlueSky Apartments</Title>
                      <SubTitle size="xs">Most Successful Fellas</SubTitle>
                    </Stack>
                  </Box>

                  <Box>
                    <Stack className="ml-2">
                      <div className="d-flex gap-2 mb-2">
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/facebook-4.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/twitter-2.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/linkedin-2.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/youtube-3.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                      </div>
                      <SubTitle size="xs">Labor 24 - 35 years</SubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Badge color="green">Live Now</Badge>
                  </Box>
                  <Box>
                    <Stack className="ml-2">
                      <Group className="symbol-group symbol-hover mb-1">
                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-6.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-5.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-25.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-9.jpg"
                            alt=""
                          />
                        </div>
                      </Group>
                      <SubTitle size="xs">Labor 24 - 35 years</SubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack className="ml-2">
                      <Title order={6}>24 Dec 21 - 06 Jan 22</Title>
                      <SubTitle size="xs">Date range</SubTitle>
                    </Stack>
                  </Box>
                  <ActionIcon size={35} variant="default">
                    <IconArrowRight size={20} />
                  </ActionIcon>
                </Box>
              </Box>
              <Box className="mt-6 ">
                <Box className="flex items-center justify-between">
                  <Box className="border-l-4 border-amber-500">
                    <Stack className="ml-2">
                      <Title order={4}>BlueSky Apartments</Title>
                      <SubTitle size="xs">Most Successful Fellas</SubTitle>
                    </Stack>
                  </Box>

                  <Box>
                    <Stack className="ml-2">
                      <div className="d-flex gap-2 mb-2">
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/facebook-4.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/twitter-2.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/linkedin-2.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://preview.keenthemes.com/good/assets/media/svg/brand-logos/youtube-3.svg"
                            className="w-20px"
                            alt=""
                          />
                        </a>
                      </div>
                      <SubTitle size="xs">Labor 24 - 35 years</SubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Badge color="green">Live Now</Badge>
                  </Box>
                  <Box>
                    <Stack className="ml-2">
                      <Group className="symbol-group symbol-hover mb-1">
                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-6.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-5.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-25.jpg"
                            alt=""
                          />
                        </div>

                        <div className="symbol symbol-circle symbol-25px">
                          <Avatar
                            src="https://preview.keenthemes.com/good/assets/media/avatars/300-9.jpg"
                            alt=""
                          />
                        </div>
                      </Group>
                      <SubTitle size="xs">Labor 24 - 35 years</SubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack className="ml-2">
                      <Title order={6}>24 Dec 21 - 06 Jan 22</Title>
                      <SubTitle size="xs">Date range</SubTitle>
                    </Stack>
                  </Box>
                  <ActionIcon size={35} variant="default">
                    <IconArrowRight size={20} />
                  </ActionIcon>
                </Box>
              </Box>
            </ScrollArea>
          </ChartPaper>
        </Grid.Col>
      </Grid>
      {/* //////////////////////////////// */}
      <Grid className="mt-2">
        <Grid.Col lg={4} xs={12}>
          <ChartPaper
            titleTxt="Top Selling Categories"
            subtitleTxt="8k social visitors"
            style={{ minHeight: '287px' }}
          >
            <ReactApexChart
              options={state4.options}
              series={state4.series}
              type="bar"
              height={350}
            />
          </ChartPaper>
        </Grid.Col>
        <Grid.Col lg={4} xs={12}>
          <ChartPaper
            titleTxt="Instagram Subscribers"
            subtitleTxt="75% activity growth"
            style={{ boxSizing: 'border-box', height: '100%' }}
          >
            <Box className="pa-6">
              <Timeline color="yellow" active={2} reverseActive bulletSize={20}>
                <Timeline.Item title="New branch">
                  <Text color="dimmed" size="sm">
                    You&apos;ve created new branch{' '}
                    <Text variant="link" component="span" inherit>
                      fix-notifications
                    </Text>{' '}
                    from master
                  </Text>
                </Timeline.Item>

                <Timeline.Item title="Commits">
                  <Text color="dimmed" size="sm">
                    You&apos;ve pushed 23 commits to
                    <Text variant="link" component="span" inherit>
                      fix-notifications branch
                    </Text>
                  </Text>
                </Timeline.Item>

                <Timeline.Item title="Pull request" lineVariant="dashed">
                  <Text color="dimmed" size="sm">
                    You&apos;ve submitted a pull request
                    <Text variant="link" component="span" inherit>
                      Fix incorrect notification message (#187)
                    </Text>
                  </Text>
                </Timeline.Item>

                <Timeline.Item title="Code review">
                  <Text color="dimmed" size="sm">
                    <Text variant="link" component="span" inherit>
                      Robert Gluesticker
                    </Text>{' '}
                    left a code review on your pull request
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Box>
          </ChartPaper>
        </Grid.Col>
        <Grid.Col lg={4} xs={12}>
          <ChartPaper
            titleTxt="PopuLar Products"
            subtitleTxt="Latest bestsellers"
            style={{ minHeight: '287px' }}
          >
            <ScrollArea style={{ height: '365px' }}>
              <Box className="mt-6 ">
                <Box className="flex items-center justify-between">
                  <Box className="flex items-center">
                    <Image
                      width={80}
                      height={80}
                      fit="contain"
                      src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80"
                    />

                    <Stack className="ml-2">
                      <Title order={4}>BlueSky Apartments</Title>
                      <SubTitle size="xs">Most Successful Fellas</SubTitle>
                    </Stack>
                  </Box>
                  <ActionIcon size={35} variant="default">
                    <IconArrowRight size={20} />
                  </ActionIcon>
                </Box>
              </Box>
              <Box className="mt-6 ">
                <Box className="flex items-center justify-between">
                  <Box className="flex items-center">
                    <Image
                      width={80}
                      height={80}
                      fit="contain"
                      src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80"
                    />

                    <Stack className="ml-2">
                      <Title order={4}>BlueSky Apartments</Title>
                      <SubTitle size="xs">Most Successful Fellas</SubTitle>
                    </Stack>
                  </Box>
                  <ActionIcon size={35} variant="default">
                    <IconArrowRight size={20} />
                  </ActionIcon>
                </Box>
              </Box>
              <Box className="mt-6 ">
                <Box className="flex items-center justify-between">
                  <Box className="flex items-center">
                    <Image
                      width={80}
                      height={80}
                      fit="contain"
                      src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80"
                    />

                    <Stack className="ml-2">
                      <Title order={4}>BlueSky Apartments</Title>
                      <SubTitle size="xs">Most Successful Fellas</SubTitle>
                    </Stack>
                  </Box>
                  <ActionIcon size={35} variant="default">
                    <IconArrowRight size={20} />
                  </ActionIcon>
                </Box>
              </Box>
              <Box className="mt-6 ">
                <Box className="flex items-center justify-between">
                  <Box className="flex items-center">
                    <Image
                      width={80}
                      height={80}
                      fit="contain"
                      src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80"
                    />

                    <Stack className="ml-2">
                      <Title order={4}>BlueSky Apartments</Title>
                      <SubTitle size="xs">Most Successful Fellas</SubTitle>
                    </Stack>
                  </Box>
                  <ActionIcon size={35} variant="default">
                    <IconArrowRight size={20} />
                  </ActionIcon>
                </Box>
              </Box>
            </ScrollArea>
          </ChartPaper>
        </Grid.Col>
      </Grid>
    </>
  );
}
