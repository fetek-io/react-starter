import { jobList } from '@/utils/constant';
import { Image, Center, Text, Stack } from '@mantine/core';
export default function AllJobs() {
  return (
    <>
      {jobList.map((item) => (
        <Center>
          <Stack spacing={'xs'} className="items-center cursor-pointer">
            <Image src={item.url} alt={item.name} key={item.name} width={40} />
            <Text size="xs">{item.name}</Text>
          </Stack>
        </Center>
      ))}
    </>
  );
}
