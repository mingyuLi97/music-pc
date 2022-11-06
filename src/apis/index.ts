import http from '@/utils/axios';
import discover from './discover';

export function getHomepage(refresh = false, cursor = '') {
  return http.get<any, any>('/homepage/block/page', {
    params: {
      refresh,
      cursor,
    },
  });
}

function getBanner() {
  return http.get<any, { banners: { imageUrl: string; url: string | null }[] }>(
    '/banner',
    {
      params: {},
    }
  );
}

export default {
  discover,
  other: {
    getBanner,
  },
};
