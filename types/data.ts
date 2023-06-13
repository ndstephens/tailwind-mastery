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
  description?: string;
  icon?: string;
  unread?: boolean;
  messages: Array<Message>;
};

export type Message = {
  id: number;
  user: string;
  avatarUrl: string;
  date: string;
  text: string;
};
