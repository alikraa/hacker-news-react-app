import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './App.css';

function App() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100px',
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => window.location.reload()}
          >
            Hacker News
          </Typography>
          <IconButton color="inherit">
            <UpdateIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: '30px' }}>
        <Grid container spacing={4}>
          {[...new Array(6)].map((_, i) => (
            <Grid item xs={4} key={i}>
              <Card sx={{ minWidth: 370 }}>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 16, mt: '3px' }}
                      color="text.secondary"
                    >
                      Date
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16 }}
                      color="text.secondary"
                      align="right"
                    >
                      Rating
                      <TrendingUpIcon
                        color="disabled"
                        fontSize="small"
                        sx={{ ml: '7px' }}
                      />
                    </Typography>
                  </Box>

                  <Typography variant="h5" component="div" sx={{ p: 3 }}>
                    Name
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <PersonIcon
                      color="disabled"
                      fontSize="small"
                      sx={{ mr: '5px' }}
                    />
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
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
