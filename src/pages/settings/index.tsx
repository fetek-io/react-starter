import { useTranslation } from 'react-i18next';
import { getUsers } from '@/services/userService';
import { useQuery } from 'react-query';
import { useState } from 'react';
import MyModal from './MyModal';
import { Button } from '@mantine/core';

export default function MySettings() {
  const { t } = useTranslation();
  const [opened, setOpened] = useState(false);

  const { data } = useQuery('getUsers', getUsers);

  const handleVisible = (visible: boolean) => {
    setOpened(visible);
  };

  return (
    <div>
      <p>this is my settings</p>
      {data?.success &&
        data?.data?.map((item: any) => (
          <p key={item?.username}>
            {t('txt.hello')} {item?.username}
          </p>
        ))}
      <Button
        onClick={() => {
          setOpened(true);
        }}
      >
        Open modal
      </Button>
      <MyModal opened={opened} handleVisible={handleVisible} />
    </div>
  );
}
