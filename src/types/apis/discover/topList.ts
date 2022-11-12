import type { IBaseResponse } from '../base';

export interface ITopListResponse extends IBaseResponse {
  list: ITopListItem[];
  artistToplist: IArtistToplist;
}

export interface ITopListItem {
  subscribers: any[];
  updateFrequency: string;
  backgroundCoverId: number;
  titleImage: number;
  opRecommend: boolean;
  adType: number;
  trackNumberUpdateTime: number;
  userId: number;
  subscribedCount: number;
  cloudTrackCount: number;
  createTime: number;
  highQuality: boolean;
  specialType: number;
  newImported: boolean;
  anonimous: boolean;
  updateTime: number;
  coverImgId: number;
  totalDuration: number;
  trackCount: number;
  coverImgUrl: string;
  commentThreadId: string;
  trackUpdateTime: number;
  privacy: number;
  playCount: number;
  description: string;
  status: number;
  ordered: boolean;
  tags: any[];
  name: string;
  id: number;
  coverImgId_str: string;
  ToplistType: string;
}

export interface IArtistToplist {
  coverUrl: string;
  name: string;
  upateFrequency: string;
  position: number;
  updateFrequency: string;
}
