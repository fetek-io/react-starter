import { Product, saveProducts } from '@/services/productService';
import { Button, Card, Grid, NumberInput, Stack, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { IconCircleCheck, IconX } from '@tabler/icons';
import { showNotification } from '@mantine/notifications';

export default function CreateNewProduct() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      price: 0,
      amount: 0,
      category: '',
      brand: '',
    },
    validate: {
      name: (value) => (value && value.trim() ? null : 'Yêu cầu nhập tên sản phẩm'),
    },
  });

  const handleSubmitForm = async (values: Product) => {
    setLoading(true);
    const res = await saveProducts(values);
    setLoading(false);
    if (res.success) {
      form.reset();
      showNotification({
        title: 'Thành công!',
        message: 'Tạo sản phẩm thành công',
        color: 'secondary',
        icon: <IconCircleCheck />,
      });
    } else {
      showNotification({
        title: 'Thất bại',
        message: 'Tạo sản phẩm thất bại',
        color: 'red',
        icon: <IconX />,
      });
    }
  };

  return (
    <>
      <Card withBorder shadow={'sm'} p="sm" className="m-6">
        <form onSubmit={form.onSubmit((values) => handleSubmitForm(values))}>
          <Grid>
            <Grid.Col xs={12} lg={6}>
              <Stack spacing={'lg'}>
                <TextInput
                  label="Tên sản phẩm"
                  placeholder="Tên sản phẩm"
                  withAsterisk
                  size="md"
                  {...form.getInputProps('name')}
                />
                <NumberInput
                  label="Giá sản phẩm"
                  placeholder="Giá sản phẩm"
                  size="md"
                  parser={(value: string) => value.replace(/\đ\s?|(,*)/g, '')}
                  formatter={(value: string) =>
                    !Number.isNaN(parseFloat(value))
                      ? `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                      : 'đ '
                  }
                  {...form.getInputProps('price')}
                />
                <NumberInput
                  label="Số lượng"
                  placeholder="Số lượng"
                  size="md"
                  {...form.getInputProps('amount')}
                />
                <TextInput
                  label="Loại sản phẩm"
                  placeholder="Loại sản phẩm"
                  size="md"
                  {...form.getInputProps('category')}
                />
                <TextInput
                  label="Thương hiệu"
                  placeholder="Thương hiệu"
                  size="md"
                  {...form.getInputProps('brand')}
                />
                <Textarea
                  label="Mô tả sản phẩm"
                  placeholder="Mô tả sản phẩm"
                  size="md"
                  {...form.getInputProps('description')}
                />
              </Stack>
            </Grid.Col>
            {/* <Grid.Col xs={12} lg={6}>
              <Stack spacing={'lg'}></Stack>
            </Grid.Col> */}
          </Grid>
          <div className="flex justify-end items-center mt-4">
            <Button type="submit" loading={loading}>
              Tạo sản phẩm
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
