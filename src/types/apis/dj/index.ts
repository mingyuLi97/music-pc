import type { IBaseResponse } from '../base';

export interface IHotDjResponse extends IBaseResponse {
  data: {
    total: number;
    updateTime: number;
    list: IHotDj[];
  };
}

export interface IHotDj {
  id: number;
  rank: number;
  lastRank: number;
  score: number;
  nickName: string;
  avatarUrl: string;
  userType: number;
  userFollowedCount: number;
  mainAuthDesc: string;
  liveStatus: number;
  liveType: number;
  liveId: number;
  avatarDetail: {
    userType: number;
    identityLevel: number;
    identityIconUrl: string;
  };
  roomNo: number;
}
