import http from '@/utils/axios';

export function getBanner() {
  return http.get<any, any>('/banner', {
    params: {},
  });
}
