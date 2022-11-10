import { logOut } from '@/services/localStorageService';
import { NavLink } from '@mantine/core';
import { IconLogout } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

export default function LogOut() {
  const navigate = useNavigate();
  return (
    <NavLink
      label="Logout"
      icon={<IconLogout size={16} stroke={1.5} />}
      onClick={() => {
        logOut();
        navigate('/login');
      }}
    />
  );
}
