import type { IBaseResponse } from '../base';

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

export interface INewestAlbumResponse extends IBaseResponse {
  albums: INewestAlbums[];
}

export interface INewestAlbums {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: INewestAlbumArtist;
  alias: any[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: INewestAlbumArtists[];
  paid: boolean;
  onSale: boolean;
  picId_str: string;
}

export interface INewestAlbumArtist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
  picId_str: string;
  img1v1Id_str: string;
}

export interface INewestAlbumArtists {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
  img1v1Id_str: string;
}
