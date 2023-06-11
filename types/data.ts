export type Data = {
  id: number;
  label: string;
  img: string;
  categories: Array<Category>;
};

type Category = {
  id: number;
  label: string;
  channels: Array<Channel>;
};

export type Channel = {
  id: number;
  label: string;
  icon?: string;
};
