import request from '@/utils/request';

export async function getUsers() {
  try {
    const res = await request.get('/users');
    return {
      success: true,
      data: res.data,
    };
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  }
}
