import { useEffect, useState } from 'react';
import LoopIcon from '@mui/icons-material/Loop';
import { Header } from './components/header.tsx';
import { NewsList } from './components/news-list.tsx';
import { serverRequest, dataType, baseUrl, getStory } from './ts/request.ts';
import { MAX_NEWS, NEWS_INCREMENT } from './ts/consts.ts';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [end, setEnd] = useState(NEWS_INCREMENT);

  useEffect(() => {
    const url = `${baseUrl}${dataType}.json`;

    serverRequest(url)
      .then((data) => getStory(data))
      .then((res) => setNews(res))
      .finally(() => setIsLoading(true));
  }, [end]);

  const showMore = () => {
    if (end === MAX_NEWS) {
      setEnd(MAX_NEWS);
    }
    setEnd((prev) => prev + NEWS_INCREMENT);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <NewsList news={news} end={end} handleClick={showMore} />
      ) : (
        <LoopIcon color="primary" sx={{ width: '100%', height: 150, mt: 20 }} />
      )}
    </>
  );
}

export default App;
