// COMPONENTS
interface HeaderProps {
  handleClick: () => void;
  location: boolean;
}

interface NewsItemProps {
  id: number;
  date: string;
  rating: number | undefined;
  name: string | undefined;
  author: string;
}

interface NewsCommentData {
  by: string;
  id: number;
  time: number;
  type: string;
  descendants?: number;
  score?: number;
  title?: string;
  url?: string;
  kids?: number[];
  parent?: number;
  text?: string;
}

interface NewsCommentsProps {
  comments: NewsCommentData[];
  descendants: number;
}

interface CommentItemProps {
  comment: NewsCommentData;
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

export type {
  HeaderProps,
  NewsItemProps,
  NewsCommentsProps,
  CommentItemProps,
  NewsIds,
  State,
  NewsCommentData,
};
