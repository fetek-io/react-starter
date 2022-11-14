import request from '@/utils/request';

export interface ProductRequest {
  limit: number;
  offset: number;
  name?: string;
  category?: string;
  brand?: string;
}

export interface Product {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  amount?: number;
  category?: string;
  brand?: string;
}

export async function getProducts(productRequest: ProductRequest) {
  try {
    // debugger;
    const res = await request.post('/products', productRequest);
    return {
      success: true,
      data: res?.data,
    };
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  }
}

export async function saveProducts(product: Product) {
  try {
    // debugger;
    const res = await request.post('/product/save', product);
    return {
      success: true,
      data: res?.data,
    };
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  }
}
