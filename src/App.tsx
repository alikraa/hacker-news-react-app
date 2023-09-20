import { useEffect, useState } from 'react';
import { Header } from './components/header.tsx';
import { NewsList } from './components/news-list.tsx';
import { serverRequest } from './ts/request.ts';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    serverRequest('https://hacker-news.firebaseio.com/v0/newstories.json').then(
      (data) =>
        Promise.allSettled(
          data.map((id: number) =>
            serverRequest(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            )
          )
        ).then((json) => setNews(json))
    );
  }, []);

  return (
    <>
      <Header />
      <NewsList news={news} />
    </>
  );
}

export default App;
