import { useTranslation } from 'react-i18next';
import { getUsers } from '@/services/userService';
import { useQuery } from 'react-query';

export default function MySettings() {
  const { t } = useTranslation();

  const { data } = useQuery('getUsers', getUsers);

  return (
    <div>
      <p>this is my settings</p>
      {data?.success &&
        data?.data?.map((item: any) => (
          <p key={item?.username}>
            {t('txt.hello')} {item?.username}
          </p>
        ))}
    </div>
  );
}
