import request from '@/utils/request';
import qs from 'qs';

export async function getUsers() {
  try {
    const res = await request.get('/users');
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

export async function login(data: {
  username: string | null | undefined;
  password: string | null | undefined;
}) {
  try {
    const res = await request.post('/login', qs.stringify(data), {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    });
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
