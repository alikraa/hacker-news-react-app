import { Button, Container, Grid } from '@mui/material';
import format from 'date-fns/format';
import { NewsItem } from './news-item.tsx';

function NewsList({ news, end, handleClick }) {
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Grid container spacing={4}>
        {news.slice(0, end).map((item) => (
          <NewsItem
            key={item.value.id}
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
        onClick={handleClick}
      >
        Show More
      </Button>
    </Container>
  );
}

export { NewsList };
