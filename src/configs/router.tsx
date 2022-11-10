import PageLayout from '@/components/layouts/PageLayout';
import type { RouteObject } from 'react-router-dom';
import MySettings from '@/pages/settings';
import LoginPage from '@/pages/login';
import HomePage from '@/pages/Home';
import AuthLayout from '@/components/layouts/AuthLayout';
import CreateOrder from '@/pages/order/CreateOrder';
import OrderList from '@/pages/order/OrderList';
import ProductList from '@/pages/products';
import ProductDetail from '@/pages/products/ProductDetail';
import CreateNewProduct from '@/pages/products/CreateNewProduct';
import StoreList from '@/pages/stores';
import StoreDetail from '@/pages/stores/StoreDetail';
import CreateNewStore from '@/pages/stores/CreateNewStore';
import ComboList from '@/pages/combos';
import ComboDetail from '@/pages/combos/ComboDetail';
import CreateNewCombo from '@/pages/combos/CreateNewCombo';
import VoucherList from '@/pages/vouchers';
import VoucherDetail from '@/pages/vouchers/VoucherDetail';
import CreateNewVoucher from '@/pages/vouchers/CreateNewVoucher';
import UserDetail from '@/pages/configs/user/UserDetail';
import PaymentMethods from '@/pages/configs/payment';
import MethodDetail from '@/pages/configs/payment/MethodDetail';
import AddNewMethod from '@/pages/configs/payment/AddNewMethod';
import CustomerList from '@/pages/customers';
import CustomerDetail from '@/pages/customers/CustomerDetail';
import AddNewCustomer from '@/pages/customers/AddNewCustomer';
import ProviderList from '@/pages/providers';
import ProviderDetail from '@/pages/providers/ProviderDetail';
import CreateNewProvider from '@/pages/providers/CreateNewProvider';
import ImportList from '@/pages/import-goods';
import ImportDetail from '@/pages/import-goods/ImportDetail';
import CreateNewImport from '@/pages/import-goods/CreateNewImport';
import InStockReport from '@/pages/in-stock/InStockReport';
import InStockDetail from '@/pages/in-stock/InStockDetail';
import CreateNewInStock from '@/pages/in-stock/CreateNewInStock';
import InStockList from '@/pages/in-stock';
import ReportByStore from '@/pages/reports/profit/ReportByStore';
import ReportByTime from '@/pages/reports/profit/ReportByTime';
import ReportByEmployee from '@/pages/reports/profit/ReportByEmployee';
import RevenueReportByStore from '@/pages/reports/revenue/ReportByStore';
import RevenueReportByTime from '@/pages/reports/revenue/ReportByTime';
import RevenueReportByEmployee from '@/pages/reports/revenue/ReportByEmployee';
import NotFound from '@/pages/404';
import ProfitReport from '@/pages/reports/profit';
import RevenueReport from '@/pages/reports/revenue';

export const routes = [
  {
    element: <PageLayout />,
    path: '/',
    children: [
      {
        path: '/home',
        index: true,
        element: <HomePage />,
      },
      {
        path: '/orders',
        children: [
          {
            index: true,
            element: <OrderList />,
          },
          {
            path: '/orders/create',
            element: <CreateOrder />,
          },
        ],
      },
      {
        path: '/products',
        children: [
          {
            index: true,
            element: <ProductList />,
          },
          {
            path: '/products/:id',
            element: <ProductDetail />,
          },
          {
            path: '/products/create',
            element: <CreateNewProduct />,
          },
        ],
      },
      {
        path: '/stores',
        children: [
          {
            index: true,
            element: <StoreList />,
          },
          {
            path: '/stores/:id',
            element: <StoreDetail />,
          },
          {
            path: '/stores/create',
            element: <CreateNewStore />,
          },
        ],
      },
      {
        path: '/combos',
        children: [
          {
            index: true,
            element: <ComboList />,
          },
          {
            path: '/combos/:id',
            element: <ComboDetail />,
          },
          {
            path: '/combos/create',
            element: <CreateNewCombo />,
          },
        ],
      },
      {
        path: '/vouchers',
        children: [
          {
            index: true,
            element: <VoucherList />,
          },
          {
            path: '/vouchers/:id',
            element: <VoucherDetail />,
          },
          {
            path: '/vouchers/create',
            element: <CreateNewVoucher />,
          },
        ],
      },
      {
        path: '/customers',
        children: [
          {
            index: true,
            element: <CustomerList />,
          },
          {
            path: '/customers/:id',
            element: <CustomerDetail />,
          },
          {
            path: '/customers/create',
            element: <AddNewCustomer />,
          },
        ],
      },
      {
        path: '/providers',
        children: [
          {
            index: true,
            element: <ProviderList />,
          },
          {
            path: '/providers/:id',
            element: <ProviderDetail />,
          },
          {
            path: '/providers/create',
            element: <CreateNewProvider />,
          },
        ],
      },
      {
        path: '/imported-goods',
        children: [
          {
            index: true,
            element: <ImportList />,
          },
          {
            path: '/imported-goods/:id',
            element: <ImportDetail />,
          },
          {
            path: '/imported-goods/create',
            element: <CreateNewImport />,
          },
        ],
      },
      {
        path: '/in-stock',
        children: [
          {
            index: true,
            element: <InStockReport />,
          },
          {
            path: '/in-stock/list',
            element: <InStockList />,
          },
          {
            path: '/in-stock/:id',
            element: <InStockDetail />,
          },
          {
            path: '/in-stock/create',
            element: <CreateNewInStock />,
          },
        ],
      },
      {
        path: '/reports',
        children: [
          {
            index: true,
            element: <ProfitReport />, // profit
          },
          {
            path: '/reports/profit-report',
            element: <ProfitReport />, // profit
          },
          {
            path: '/reports/profit-by-time',
            element: <ReportByTime />, // profit
          },
          {
            path: '/reports/profit-by-store',
            element: <ReportByStore />, // profit
          },
          {
            path: '/reports/profit-by-employee',
            element: <ReportByEmployee />, // profit
          },
          {
            path: '/reports/revenue-report',
            element: <RevenueReport />, // profit
          },
          {
            path: '/reports/revenue-by-time',
            element: <RevenueReportByTime />, // revenue
          },
          {
            path: '/reports/revenue-by-store',
            element: <RevenueReportByStore />, // revenue
          },
          {
            path: '/reports/revenue-by-employee',
            element: <RevenueReportByEmployee />, // revenue
          },
        ],
      },
      {
        path: '/configs',
        children: [
          {
            index: true,
            element: <UserDetail />,
          },
          {
            path: '/configs/shop',
            element: <UserDetail />,
          },
          {
            path: '/configs/payment',
            children: [
              {
                index: true,
                element: <PaymentMethods />,
              },
              {
                path: '/configs/payment/:id',
                element: <MethodDetail />,
              },
              {
                path: '/configs/payment/create',
                element: <AddNewMethod />,
              },
            ],
          },
        ],
      },
      {
        path: '/example',
        index: true,
        element: <MySettings />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <LoginPage />,
        path: '/login',
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
] as RouteObject[];
