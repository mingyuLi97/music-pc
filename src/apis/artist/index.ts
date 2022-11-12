import type { IHotArtistsResponse } from '@/types/apis/artists';
import http from '@/utils/axios';

/**
 * 获取热门歌手
 * @doc https://neteasecloudmusicapi.vercel.app/#/?id=%e7%83%ad%e9%97%a8%e6%ad%8c%e6%89%8b
 * @param limit 取出数量 , 默认为 50
 * @param offset 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 */
export function getHotArtist(limit?: number, offset?: number) {
  return http.get<any, IHotArtistsResponse>('/top/artists', {
    params: {
      limit,
      offset,
    },
  });
}
