export type BaseInfo = {
  name: string;
  email: string;
};
export type User = {
  id: number;
} & BaseInfo;

export type Hash = Record<string, BaseInfo>;

export type RowAlbum = {
  userId: number;
  id: number;
  title: string;
};

export type Album = {
  id: number;
  title: string;
} & BaseInfo;

export type PicType = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

