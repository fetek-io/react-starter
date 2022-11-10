import { getAccessToken } from '@/services/localStorageService';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export default function AuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}
