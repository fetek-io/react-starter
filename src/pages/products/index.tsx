import {
  Card,
  Tabs,
  Button,
  SegmentedControl,
  Table,
  Stack,
  Grid,
  Pagination,
  LoadingOverlay,
  TextInput,
  ActionIcon,
} from '@mantine/core';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getProducts, Product } from '@/services/productService';
import { useLocation, useNavigate } from 'react-router';
import { createSearchParams, Link } from 'react-router-dom';
import * as queryString from 'query-string';
import { SubTitle } from '@/components/core/Typography';
import { debounce } from 'lodash';
import { IconX, IconLoader2 } from '@tabler/icons';
import { v4 as uuid } from 'uuid';
import { formatNumberCurrency } from '@/utils/myUtil';

const limit = 5;
export default function ProductList() {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [name, setName] = useState<string | undefined>(query?.key ? String(query?.key) : undefined);
  const [nameKey, setNameKey] = useState<string>(uuid());
  const [brand, setBrand] = useState<string | undefined>(
    query?.brand ? String(query?.brand) : 'all'
  );
  const [category, setCategory] = useState<string | undefined>(
    query?.category ? String(query?.category) : 'all'
  );
  const [offset, setOffset] = useState(query?.page ? Number(query?.page) : 1);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery([name, brand, category, offset], () =>
    getProducts({
      name: name ? name : undefined,
      brand: brand && brand !== 'all' ? brand : undefined,
      category: category && category !== 'all' ? category : undefined,
      offset: offset ? offset - 1 : offset,
      limit,
    })
  );

  const products = data?.data?.content;

  const handleChangePage = (page: number) => {
    setOffset(page);
    navigate({
      pathname: '/products',
      search: `?${createSearchParams({ ...query, page: `${page}` })}`,
    });
  };

  const handleChangeName = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event?.target?.value;
    setName(name);
    setOffset(1);
    navigate({
      pathname: '/products',
      search: `?${createSearchParams({ ...query, page: `1`, key: `${name}` })}`,
    });
  }, 1000);

  const handleClearName = (name: string) => {
    setName(name);
    setNameKey(uuid());
    setOffset(1);
    navigate({
      pathname: '/products',
      search: `?${createSearchParams({ ...query, page: `1`, key: `${name}` })}`,
    });
  };

  const handleChangeCategory = (name: string) => {
    setCategory(name);
    navigate({
      pathname: '/products',
      search: `?${createSearchParams({ ...query, category: `${name}` })}`,
    });
  };

  const handleChangeBrand = (name: string) => {
    setBrand(name);
    navigate({
      pathname: '/products',
      search: `?${createSearchParams({ ...query, brand: `${name}` })}`,
    });
  };

  return (
    <>
      <Card withBorder shadow={'md'} p={30} m={30} radius={'md'}>
        <Tabs variant="outline" value={category} onTabChange={handleChangeCategory}>
          <Tabs.List>
            <Tabs.Tab value="all">Tất cả</Tabs.Tab>
            <Tabs.Tab value="Bánh kẹo">Bánh kẹo</Tabs.Tab>
            <Tabs.Tab value="messages">Messages</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <Stack spacing={'xl'}>
          <Grid className="mt-4">
            <Grid.Col lg={8} xs={12} className="flex items-center gap-2">
              <Link to="/products/create">
                <Button>Tạo mới</Button>
              </Link>
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
                <TextInput
                  placeholder="Tìm kiếm theo tên sản phẩm"
                  defaultValue={name}
                  onChange={handleChangeName}
                  key={nameKey}
                  rightSection={
                    name ? (
                      isLoading ? (
                        <ActionIcon size={'xs'}>
                          <IconLoader2 />
                        </ActionIcon>
                      ) : (
                        <ActionIcon
                          size={'xs'}
                          onClick={() => {
                            handleClearName('');
                          }}
                        >
                          <IconX />
                        </ActionIcon>
                      )
                    ) : undefined
                  }
                />
              </div>
            </Grid.Col>
            <Grid.Col lg={4} xs={12} className="flex items-center justify-end">
              <SegmentedControl
                value={brand}
                onChange={handleChangeBrand}
                data={[
                  { label: 'Tất cả', value: 'all' },
                  { label: 'Orion', value: 'Orion' },
                  { label: 'Angular', value: 'ng' },
                  { label: 'Vue', value: 'vue' },
                  { label: 'Svelte', value: 'svelte' },
                ]}
              />
            </Grid.Col>
          </Grid>
          <div style={{ position: 'relative' }}>
            <LoadingOverlay visible={isLoading} overlayBlur={10} transitionDuration={0} />
            <Table striped highlightOnHover withBorder withColumnBorders verticalSpacing="md">
              <thead>
                <tr>
                  <th>name</th>
                  <th>category</th>
                  <th>brand</th>
                  <th>
                    <p className="text-right m-0">price</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((element: Product) => (
                    <tr key={element.id}>
                      <td>{element.name}</td>
                      <td>{element.category}</td>
                      <td>{element.brand}</td>
                      <td className="text-right">{formatNumberCurrency(`${element.price}`)}</td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>name</th>
                  <th>category</th>
                  <th>brand</th>
                  <th>
                    <p className="text-right m-0">price</p>
                  </th>
                </tr>
              </tfoot>
            </Table>
            <div className="mt-4 flex justify-between">
              <SubTitle>
                {data?.data?.numberOfElements} trên tổng số {data?.data?.totalElements} sản phẩm
              </SubTitle>
              <Pagination
                page={offset}
                onChange={handleChangePage}
                total={data?.data?.totalPages}
              />
            </div>
          </div>
        </Stack>
      </Card>
    </>
  );
}
