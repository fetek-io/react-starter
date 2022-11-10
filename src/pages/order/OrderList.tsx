import {
  Group,
  Card,
  Tabs,
  Button,
  SegmentedControl,
  Table,
  Stack,
  Grid,
  Select,
  Text,
  Loader,
} from '@mantine/core';
import { elements } from '@/utils/mockdata';
import { forwardRef, useCallback, useRef, useState } from 'react';
import useBookSearch from './useBookSearch';

const rows = elements.map((element) => (
  <tr key={element.symbol}>
    <td>{element.position}</td>
    <td>{element.name}</td>
    <td>{element.symbol}</td>
    <td>{element.mass}</td>
  </tr>
));

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  description: string;
  total: number;
  lastRef: any;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, description, id, total, lastRef, ...others }: ItemProps, ref) => (
    <div ref={Number(id?.split('-')?.reverse()[0]) + 1 === total ? lastRef : ref} {...others}>
      <Group noWrap>
        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

export default function OrderList() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const observer = useRef() as React.MutableRefObject<IntersectionObserver>;
  const lastBookElementRef = useCallback(
    (node: HTMLElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e: string) {
    setQuery(e);
    setPageNumber(1);
  }

  return (
    <>
      <Card withBorder shadow={'md'} p={30} m={30} radius={'md'}>
        <Tabs variant="outline" defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
            <Tabs.Tab value="messages">Messages</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            <Stack spacing={'xl'}>
              <Grid className="mt-4">
                <Grid.Col lg={8} xs={12} className="flex items-center gap-2">
                  <Button>Tạo mới</Button>
                </Grid.Col>
                <Grid.Col lg={4} xs={12} className="flex items-center justify-end">
                  <Button className="mr-2" variant="outline">
                    Nhập File
                  </Button>
                  <Button variant="outline">Xuất File</Button>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col lg={8} xs={12} className="flex items-center gap-2">
                  <label className="flex-none">Tìm kiếm sản phẩm:&nbsp;</label>
                  <div className="grow">
                    {books ? (
                      <Select
                        placeholder="Pick one"
                        searchable
                        dropdownPosition="bottom"
                        zIndex={99}
                        maxDropdownHeight={280}
                        onSearchChange={handleSearch}
                        searchValue={query}
                        nothingFound="No options"
                        allowDeselect
                        clearable
                        rightSection={loading ? <Loader size="xs" /> : undefined}
                        data={books?.map((item: any) => ({
                          label: item,
                          value: item,
                          total: books?.length,
                          lastRef: lastBookElementRef,
                        }))}
                        itemComponent={SelectItem}
                      />
                    ) : undefined}
                  </div>
                </Grid.Col>
                <Grid.Col lg={4} xs={12} className="flex items-center justify-end">
                  <SegmentedControl
                    data={[
                      { label: 'React', value: 'react' },
                      { label: 'Angular', value: 'ng' },
                      { label: 'Vue', value: 'vue' },
                      { label: 'Svelte', value: 'svelte' },
                    ]}
                  />
                </Grid.Col>
              </Grid>
              <div>
                <Table striped highlightOnHover withBorder withColumnBorders verticalSpacing="md">
                  <thead>
                    <tr>
                      <th>Element position</th>
                      <th>Element name</th>
                      <th>Symbol</th>
                      <th>Atomic mass</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                  <tfoot>
                    <tr>
                      <th>Total</th>
                      <th>Element name</th>
                      <th>Symbol</th>
                      <th>Atomic mass</th>
                    </tr>
                  </tfoot>
                </Table>
              </div>
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="messages" pt="xs">
            Messages tab content
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </Card>
    </>
  );
}
