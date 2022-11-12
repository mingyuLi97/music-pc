import type { IBaseResponse } from '../base';

export interface IHotArtistsResponse extends IBaseResponse {
  more: boolean;
  artists: IArtists[];
}

export interface IArtists {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: string[];
  trans: string;
  musicSize: number;
  topicPerson: number;
  picId_str: string;
  img1v1Id_str: string;
  followed: boolean;
}
