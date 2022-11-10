import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/utils/constant';

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN);
}

export function setToken(token: string) {
  localStorage.setItem(ACCESS_TOKEN, token);
}

export function setRefreshToken(token: string) {
  localStorage.setItem(REFRESH_TOKEN, token);
}

export function logOut() {
  setToken('');
  setRefreshToken('');
}
