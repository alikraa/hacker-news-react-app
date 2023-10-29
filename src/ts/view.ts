import { getStories } from './request.ts';
import { NewsCommentData } from './types.ts';

export const getComments = (
  comments: number[],
  setData: (data: NewsCommentData[]) => void
) => {
  if (comments?.length > 0) {
    getStories(comments).then((data) => setData(data));
  }
};
