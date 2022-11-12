import type { ITopListResponse } from '@/types/apis/discover/topList';
import http from '@/utils/axios';

/**
 * @description: 所有榜单
 * https://neteasecloudmusicapi.vercel.app/#/?id=%e6%89%80%e6%9c%89%e6%a6%9c%e5%8d%95
 */
export function getTopList() {
  return http.get<any, ITopListResponse>('/toplist');
}
