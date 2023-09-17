import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function NewsItem() {
  return (
    <Grid item xs={4}>
      <Card sx={{ minWidth: 370 }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography fontSize={16} color="text.secondary">
              Date
            </Typography>

            <Typography fontSize={16} color="text.secondary">
              Rating
              <TrendingUpIcon
                color="disabled"
                fontSize="small"
                sx={{ ml: 1, verticalAlign: 'sub' }}
              />
            </Typography>
          </Box>

          <Typography variant="h5" component="div" sx={{ p: 3 }}>
            Name
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <PersonIcon color="disabled" fontSize="small" sx={{ mr: 1 }} />
            <Typography color="text.secondary" align="center">
              Author
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="medium" sx={{ fontWeight: 600, fontSize: 17 }}>
            More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export { NewsItem };
