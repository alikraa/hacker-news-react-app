import { NewsArray } from './types.ts';

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

export const getStories = async (
  ids: number[]
): Promise<string | PromiseSettledResult<NewsArray>[]> => {
  try {
    const response = await Promise.allSettled(
      ids.map((id) => serverRequest(`${baseUrl}${pathStory}${id}.json`))
    );

    if (!response) {
      throw new Error('failed to fetch');
    } else {
      return response;
    }
  } catch (error) {
    return (error as Error).message;
  }
};
