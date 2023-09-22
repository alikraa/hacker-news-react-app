export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const dataType = 'newstories';
const pathStory = 'item/';

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

export const getStory = async (ids: number[]) => {
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
