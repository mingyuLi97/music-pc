export interface IBaseResponse {
  code: 200;
}

export interface PersonalizedPlaylistItem {
  alg: 'alg_high_quality';
  canDislike: boolean;
  copywriter: string;
  highQuality: boolean;
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  trackCount: number;
  trackNumberUpdateTime: number;
  type: 0;
}

export interface IPersonalizedResponse extends IBaseResponse {
  category: 0;
  hasTaste: boolean;
  result: PersonalizedPlaylistItem[];
}
