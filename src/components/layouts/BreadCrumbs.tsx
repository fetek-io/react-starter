import { Breadcrumbs, Anchor } from '@mantine/core';
import { isArray } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

export default function BreadCrumbs() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const pathElements = pathname && pathname?.split('/');

  //TODO: need refactor breadcrumbs logic more clearly
  const myItems = [] as JSX.Element[];
  if (pathElements && isArray(pathElements)) {
    pathElements?.forEach((item: string, index: number) => {
      let path = '';
      let desc = '';
      if (item) {
        switch (item) {
          //child lowest level
          case 'create':
            path = pathname;
            desc = 'Tạo mới';
            break;
          case 'home':
            path = pathname;
            desc = 'Trang chủ';
            break;
          //child lv2
          case 'orders':
          case 'products':
          case 'stores':
          case 'combos':
          case 'vouchers':
          case 'customers':
          case 'providers':
          case 'imported-goods':
          case 'in-stock':
          case 'reports':
          case 'configs':
            path = '/' + item;
            desc = t(item);
            break;
          // child lv3 (is not lowest level)
          case 'shop':
          case 'payment':
            path = '/' + pathElements[index - 1] + '/' + item;
            desc = t(item);
            break;
          // child lv3 (is lowest level)
          case 'profit-by-time':
          case 'profit-by-store':
          case 'profit-by-employee':
          case 'revenue-by-time':
          case 'revenue-by-store':
          case 'revenue-by-employee':
          case 'revenue-report':
          case 'profit-report':
            path = pathname;
            desc = t(item);
            break;
          //child lowest level
          default:
            path = pathname;
            desc = 'Chi tiết';
        }
        myItems.push(
          <Anchor href={path} key={index}>
            {desc}
          </Anchor>
        );
      }
    });
  }

  return (
    <>
      {myItems && myItems.length > 0 && (
        <Breadcrumbs className="bg-blue-200 pa-4 mt-2">{myItems}</Breadcrumbs>
      )}
    </>
  );
}
