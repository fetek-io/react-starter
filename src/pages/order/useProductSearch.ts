import { getProducts, Product } from '@/services/productService';
import { useCallback, useEffect, useState } from 'react';

export default function useProductSearch(query: string, pageNumber: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(false);

    const res = await getProducts({
      limit: 5,
      offset: pageNumber,
      name: query ? query : undefined,
    });
    setLoading(false);
    if (res.success) {
      setProducts((prevProducts: Product[]) => {
        const ids = prevProducts?.map((product) => product?.name);
        const newProducts = res?.data?.content;
        const myProducts = [] as Product[];
        newProducts?.forEach((newProduct: Product) => {
          if (ids?.includes(newProduct?.name)) {
          } else {
            myProducts.push(newProduct);
          }
        });
        return [...myProducts, ...prevProducts];
      });
      setHasMore(res?.data?.content?.length > 0);
    } else {
      setError(true);
    }
  }, [query, pageNumber]);

  // #1 run on every time when query change, run before #2 because it's not async/await func
  // useEffect(() => {
  //   console.log('`1` :>> ', `1`);
  //   setProducts([]);
  // }, [query]);

  // #2 run on every time when (query or pageNumber change) and pageNumber > 0
  useEffect(() => {
    fetchProducts();
  }, [query, pageNumber]);

  return { loading, error, products, hasMore };
}
