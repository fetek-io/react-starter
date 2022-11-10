import ChartPaper from '@/components/chart/ChartPaper';
import { SubTitle } from '@/components/core/Typography';
import {
  BackgroundImage,
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
  Box,
} from '@mantine/core';
import ReactApexChart from 'react-apexcharts';
import { IconArrowRight } from '@tabler/icons';

import { state, state2, state3, state4 } from '@/utils/mockdata';

const useStyles = createStyles((theme) => ({
  image: {
    backgroundColor: theme.colors.homeBackground,
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <>
      {/* ///////////////////////////////// */}
      <Grid className="mt-2 pa-4">
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
