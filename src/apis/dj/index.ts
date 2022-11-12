import type { IHotDjResponse } from '@/types/apis/dj';
import http from '@/utils/axios';

/**
 * 电台 - 最热主播榜
 * @doc https://neteasecloudmusicapi.vercel.app/#/?id=%e7%94%b5%e5%8f%b0-%e6%9c%80%e7%83%ad%e4%b8%bb%e6%92%ad%e6%a6%9c
 * @param limit 取出数量 , 默认为 100
 */
export function getHotDj(limit?: number) {
  return http.get<any, IHotDjResponse>('/dj/toplist/popular', {
    params: {
      limit,
    },
  });
}
