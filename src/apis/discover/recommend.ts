import http from '@/utils/axios';

export function getBanner() {
  return http.get<any, any>('/banner', {
    params: {},
  });
}
/**
 * 获取推荐歌单
 * @param {*} limit
 * @return {*}
 */
export function getRecommendPlaylist(limit = 30) {
  return http.get<any, any>('/personalized', {
    params: {
      limit,
    },
  });
}
