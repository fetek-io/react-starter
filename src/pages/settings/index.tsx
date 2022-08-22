import { useTranslation } from 'react-i18next';
import { getUsers } from '@/services/userService';
import { useQuery } from 'react-query';

export default function MySettings() {
  const { t } = useTranslation();

  const { data } = useQuery('getUsers', getUsers);

  console.log('data :>> ', data);

  return (
    <div>
      <p>this is my settings</p>
      {data?.data?.map((item: any) => (
        <p key={item?.username}>
          {t('txt.hello')} {item?.username}
        </p>
      ))}
    </div>
  );
}
