import type {
  INewestAlbumResponse,
  IPersonalizedResponse,
} from '@/types/apis/discover/recommend';
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
  return http.get<any, IPersonalizedResponse>('/personalized', {
    params: {
      limit,
    },
  });
}

/**
 * @description: 云音乐首页新碟上架数据
 * https://neteasecloudmusicapi.vercel.app/#/?id=%e6%9c%80%e6%96%b0%e4%b8%93%e8%be%91
 * @return {*}
 */
export function getNewestAlbum() {
  return http.get<any, INewestAlbumResponse>('/album/newest');
}
