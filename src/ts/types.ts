// COMPONENTS
interface HeaderProps {
  handleClick: () => void;
  location: boolean;
}

interface NewsItemProps {
  id: number;
  date: string;
  rating: number;
  name: string;
  author: string;
}

interface CommentValue {
  by: string;
  id: number;
  kids?: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

interface CommentData {
  status: string;
  value: CommentValue;
}

interface NewsCommentsProps {
  comments: CommentData[];
  descendants: number;
}

interface CommentItemProps {
  comment: CommentValue;
}

// STORE
interface NewsIds {
  data: number[] | null;
  status: string;
  error: string | unknown;
}

interface State {
  newsIds: NewsIds;
  currentNews: {
    currentNews: number;
  };
}

// REQUESTS
interface NewsData {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

interface NewsArray {
  status: string;
  value: NewsData;
}

export type {
  HeaderProps,
  NewsItemProps,
  NewsCommentsProps,
  CommentValue,
  CommentData,
  CommentItemProps,
  NewsIds,
  State,
  NewsArray,
};
