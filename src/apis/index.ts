import http from '@/utils/axios';

export function getHomepage(refresh = false, cursor = '') {
  return http.get<any, any>('/homepage/block/page', {
    params: {
      refresh,
      cursor,
    },
  });
}
