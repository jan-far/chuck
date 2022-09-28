export type JokeProps = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
};

export type Query = {
  result: JokeProps[];
  total: number;
};

export type StackParamList = {
  Home: undefined;
  Category: { category: string };
};
