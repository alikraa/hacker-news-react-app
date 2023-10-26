import { NewsCommentData } from './types.ts';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const dataType = 'newstories';
export const pathStory = 'item/';

export const serverRequest = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`request error: ${response.status}`);
    } else {
      const json = response.json();
      return json;
    }
  } catch (error) {
    return (error as Error).message;
  }
};

export const getStories = (ids: number[]): Promise<NewsCommentData[]> =>
  Promise.all(
    ids.map((id) => serverRequest(`${baseUrl}${pathStory}${id}.json`))
  );
