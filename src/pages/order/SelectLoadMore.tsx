import { Group, Select, Text } from '@mantine/core';
import { forwardRef, useCallback, useRef, useState } from 'react';
import useProductSearch from './useProductSearch';

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

export default function SelectLoadMore() {
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  const { products, hasMore, loading, error } = useProductSearch(searchValue, pageNumber);

  const observer = useRef() as React.MutableRefObject<IntersectionObserver>;
  const lastBookElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber: number) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const onSearchChange = useCallback(
    (e: string) => {
      setSearchValue(e);
      setPageNumber(0);
    },
    [searchValue]
  );

  return (
    <>
      {products ? (
        <Select
          placeholder="Pick one"
          searchable
          dropdownPosition="bottom"
          zIndex={99}
          maxDropdownHeight={280}
          onSearchChange={onSearchChange}
          searchValue={searchValue}
          nothingFound="No options"
          allowDeselect
          clearable
          data={products?.map((item: any) => ({
            label: item.name,
            value: item.name,
            total: products?.length,
            lastRef: lastBookElementRef,
          }))}
          itemComponent={SelectItem}
        />
      ) : undefined}
    </>
  );
}
