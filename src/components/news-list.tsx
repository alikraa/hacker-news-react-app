import { useEffect, useState } from 'react';
import { Alert, Button, Container, Grid } from '@mui/material';
import format from 'date-fns/format';
import LoopIcon from '@mui/icons-material/Loop';
import { NewsItem } from './news-item.tsx';
import { getStories } from '../ts/request.ts';
import { useAppSelector } from '../store/hooks.ts';
import { NewsIds } from '../store/news-slice.ts';
import { NEWS_INCREMENT, MAX_NEWS } from '../ts/consts.ts';

interface State {
  newsIds: NewsIds;
}

function NewsList() {
  const newsIds = useAppSelector((state: State) => state.newsIds.data);

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [end, setEnd] = useState(NEWS_INCREMENT);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (newsIds !== null) {
      getStories(newsIds)
        .then((data) => setNews(data))
        .finally(() => setIsLoading(true));
    }
    setIsLoading(false);
  }, [newsIds]);

  const showMore = () => {
    if (end === MAX_NEWS) {
      setEnd(MAX_NEWS);
      setMessage(true);
    }
    setEnd((prev) => prev + NEWS_INCREMENT);
  };

  return (
    <div>
      {isLoading ? (
        <Container sx={{ mt: 5, mb: 5 }}>
          <Grid container spacing={4}>
            {news.slice(0, end).map((item) => (
              <NewsItem
                key={item.value.id}
                id={item.value.id}
                date={format(new Date(item.value.time * 1000), 'PPp')}
                rating={item.value.score}
                name={item.value.title}
                author={item.value.by}
              />
            ))}
          </Grid>
          <Button
            variant="outlined"
            size="large"
            sx={{ fontSize: 17, mt: 5 }}
            onClick={showMore}
          >
            Show More
          </Button>
        </Container>
      ) : (
        <LoopIcon color="primary" sx={{ width: '100%', height: 150, mt: 20 }} />
      )}
      {message ? (
        <Alert
          severity="success"
          onClose={() => {
            setMessage(false);
          }}
          sx={{
            width: 400,
            position: 'fixed',
            right: 20,
            bottom: 10,
            fontSize: 20,
          }}
        >
          All News has been loaded
        </Alert>
      ) : (
        ''
      )}
    </div>
  );
}

export { NewsList };
