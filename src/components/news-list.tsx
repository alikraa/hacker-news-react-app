import { Container, Grid } from '@mui/material';
import { NewsItem } from './news-item.tsx';

function NewsList() {
  return (
    <Container sx={{ mt: '30px' }}>
      <Grid container spacing={4}>
        {[...new Array(6)].map((_, i) => (
          <NewsItem key={i} />
        ))}
      </Grid>
    </Container>
  );
}

export { NewsList };
