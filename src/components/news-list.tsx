import { Container, Grid } from '@mui/material';
import format from 'date-fns/format';
import { NewsItem } from './news-item.tsx';

function NewsList({ news }) {
  return (
    <Container sx={{ mt: '30px' }}>
      <Grid container spacing={4}>
        {news.map((item) => (
          <NewsItem
            key={item.value.id}
            date={format(new Date(item.value.time * 1000), 'PPP')}
            rating={item.value.score}
            name={item.value.title}
            author={item.value.by}
          />
        ))}
      </Grid>
    </Container>
  );
}

export { NewsList };
