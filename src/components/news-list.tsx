import { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import format from 'date-fns/format';
import LoopIcon from '@mui/icons-material/Loop';
import { NewsItem } from './news-item.tsx';
import { baseUrl, dataType, getStory, serverRequest } from '../ts/request.ts';

function NewsList() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${baseUrl}${dataType}.json`;

    serverRequest(url)
      .then((data) => getStory(data))
      .then((res) => setNews(res))
      .finally(() => setIsLoading(true));
  }, []);

  return (
    <div>
      {isLoading ? (
        <Container sx={{ mt: 5, mb: 5 }}>
          <Grid container spacing={4}>
            {news.slice(0, 100).map((item) => (
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
          <Button variant="outlined" size="large" sx={{ fontSize: 17, mt: 5 }}>
            Show More
          </Button>
        </Container>
      ) : (
        <LoopIcon color="primary" sx={{ width: '100%', height: 150, mt: 20 }} />
      )}
    </div>
  );
}

export { NewsList };
