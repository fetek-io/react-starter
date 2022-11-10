import { getProducts } from '@/services/productService';
import { elements } from '@/utils/mockdata';
import {
  ActionIcon,
  Button,
  Card,
  Divider,
  Footer,
  Grid,
  Group,
  Stack,
  Table,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { IconGift, IconUserPlus } from '@tabler/icons';
import { isArray } from 'lodash';
import { useEffect, useState } from 'react';
import './CreateOrder.scss';
import ScanHelper from './ScanHelper';
import { v4 as uuid } from 'uuid';
import SelectLoadMore from './SelectLoadMore';

export default function CreateOrder() {
  const [opened, setOpened] = useState(false);
  const [productBarCode, setProductBarcode] = useState('');
  const [products, setProducts] = useState([...elements]);

  useEffect(() => {
    if (opened) {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setOpened(false);
        }
      });
    } else {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'F9') {
          setOpened(true);
        }
      });
    }
  }, [opened]);

  const rows = products.map((element) => (
    <tr key={element.symbol}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  const getProductByBarcode = async (code: string) => {
    setProductBarcode(code);
    const res = await getProducts({
      limit: 1,
      offset: 0,
      name: code,
      category: '',
      brand: '',
    });
    if (res?.data?.content && isArray(res?.data?.content) && res?.data?.content?.length > 0) {
      setProducts([
        {
          position: 0,
          mass: res?.data?.content[0]?.id,
          symbol: uuid(),
          name: res?.data?.content[0]?.name,
        },
        ...products,
      ]);
    }
  };

  return (
    <>
      <Grid className="mt-2 p-4">
        <Grid.Col xs={6} lg={4} className="h-screen">
          <Stack>
            <Card withBorder shadow="sm" radius="md" className="border-blue-300">
              <Card.Section withBorder inheritPadding py="xs">
                <Group position="apart">
                  <Text weight={700}>Thông tin đơn hàng</Text>
                </Group>
              </Card.Section>
              <Card.Section inheritPadding mt="sm" pb="md">
                {/* card content */}
                <Stack>
                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      Kho hàng:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8}>
                      <TextInput placeholder="Kho hàng"></TextInput>
                    </Grid.Col>
                  </Grid>
                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      NV phụ trách:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8}>
                      <TextInput placeholder="NV phụ trách"></TextInput>
                    </Grid.Col>
                  </Grid>
                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      Ngày tạo:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8}>
                      <TextInput placeholder="Ngày tạo"></TextInput>
                    </Grid.Col>
                  </Grid>
                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      Ngày nhận hàng:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8}>
                      <TextInput placeholder="Ngày nhận hàng"></TextInput>
                    </Grid.Col>
                  </Grid>
                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      Phí vận chuyển:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8}>
                      <TextInput placeholder="Phí vận chuyển"></TextInput>
                    </Grid.Col>
                  </Grid>
                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      Khách đưa:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8}>
                      <TextInput placeholder="Khách đưa"></TextInput>
                    </Grid.Col>
                  </Grid>

                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      Tổng tiền hàng:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8} className="text-right">
                      1.000.000đ
                    </Grid.Col>
                  </Grid>
                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      Chiết khấu:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8} className="text-right">
                      1.000.000đ
                    </Grid.Col>
                  </Grid>
                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      Khách phải trả:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8} className="text-right">
                      1.000.000đ
                    </Grid.Col>
                  </Grid>
                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      Còn lại:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8} className="text-right">
                      1.000.000đ
                    </Grid.Col>
                  </Grid>
                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      Thanh toán:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8} className="text-right">
                      1.000.000đ
                    </Grid.Col>
                  </Grid>
                  <Grid>
                    <Grid.Col xs={12} lg={4}>
                      Ghi chú:&nbsp;
                    </Grid.Col>
                    <Grid.Col xs={12} lg={8} className="text-right">
                      <Textarea placeholder="ghi chú..."></Textarea>
                    </Grid.Col>
                  </Grid>
                </Stack>
              </Card.Section>
            </Card>
            <Card withBorder shadow="sm" radius="md" className="border-blue-300 cursor-pointer">
              <Card.Section>
                {/* card content */}
                <div className="flex items-center p-4">
                  <ActionIcon className="text-blue-500">
                    <IconGift />
                  </ActionIcon>
                  &nbsp;<span className="text-blue-500">Áp dụng quà khuyến mãi</span>
                </div>
              </Card.Section>
            </Card>
          </Stack>
        </Grid.Col>
        <Grid.Col xs={6} lg={8} className="h-screen">
          <Stack>
            <div className="customer-card">
              <Group position="apart">
                <Text weight={700}>Thông tin khách hàng</Text>
                <ActionIcon className="flex-none text-blue-500 cursor-pointer">
                  &nbsp;
                  <IconUserPlus />
                </ActionIcon>
              </Group>
              <Divider my="sm" />
              <Stack>
                <div className="flex items-center">
                  <label className="flex-none">Tìm kiếm khách hàng:&nbsp;</label>
                  <div className="grow">
                    <SelectLoadMore />
                  </div>
                </div>
              </Stack>
            </div>
            <Card withBorder shadow="sm" radius="md" className="border-blue-300">
              <Card.Section withBorder inheritPadding py="xs">
                <Group position="apart">
                  <Text weight={700}>Chi tiết đơn hàng</Text>
                </Group>
              </Card.Section>
              <Card.Section inheritPadding mt="sm" pb="md">
                {/* card content */}
                <Stack>
                  <div className="flex items-center gap-2">
                    <label className="flex-none">Tìm kiếm sản phẩm:&nbsp;</label>
                    <div className="grow">
                      <TextInput placeholder="Sản phẩm"></TextInput>
                    </div>

                    <ScanHelper handleBarcode={getProductByBarcode} barCode={productBarCode} />
                  </div>
                  <Table striped highlightOnHover withBorder withColumnBorders>
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
                </Stack>
              </Card.Section>
            </Card>
          </Stack>
        </Grid.Col>
      </Grid>
      <Footer
        height={54}
        children={
          <div className="h-full flex items-center justify-end mr-8">
            <Button>Lưu đơn</Button>
          </div>
        }
      ></Footer>
    </>
  );
}
