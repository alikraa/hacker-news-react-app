import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import TodayIcon from '@mui/icons-material/Today';
import UpdateIcon from '@mui/icons-material/Update';
import PersonIcon from '@mui/icons-material/Person';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import LoopIcon from '@mui/icons-material/Loop';
import { useAppSelector } from '../store/hooks.ts';
import { baseUrl, pathStory, serverRequest } from '../ts/request.ts';
import { defaultNews } from '../ts/consts.ts';

function NewsDetails() {
  const currentNews = useAppSelector((state) => state.currentNews.currentNews);

  const [news, setNews] = useState(defaultNews);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentNews !== 0) {
      serverRequest(`${baseUrl}${pathStory}${currentNews}.json`)
        .then((data) => setNews(data))
        .finally(() => setIsLoading(true));
    }
  }, [currentNews]);

  return (
    <Container maxWidth="md" sx={{ mt: '30px' }}>
      {isLoading ? (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/">
              <Button variant="outlined" size="large" sx={{ fontSize: 17 }}>
                <KeyboardBackspaceIcon
                  fontSize="small"
                  color="inherit"
                  sx={{ mr: '5px' }}
                />
                Back
              </Button>
            </Link>

            <Link to={news.url} target="_blank">
              <Button variant="outlined" size="large" sx={{ fontSize: 17 }}>
                See News
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: '20px',
            }}
          >
            <Typography fontSize={20}>
              <TodayIcon
                fontSize="medium"
                sx={{ mr: 1, verticalAlign: 'sub' }}
              />
              {format(new Date(news.time * 1000), 'PPp')}
            </Typography>
            <Typography fontSize={20}>
              <PersonIcon
                fontSize="medium"
                sx={{ mr: 1, verticalAlign: 'sub' }}
              />
              {news.by}
            </Typography>
          </Box>

          <Typography variant="h4" component="div" sx={{ mt: 5, mb: 15 }}>
            {news.title}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography fontSize={19}>
              <ForumOutlinedIcon sx={{ mr: 2, verticalAlign: 'sub' }} />
              {news.descendants}
            </Typography>
            <IconButton color="inherit" sx={{ verticalAlign: 'sub' }}>
              <UpdateIcon />
            </IconButton>
          </Box>
          <Divider color="inherit" />
        </>
      ) : (
        <LoopIcon color="primary" sx={{ width: '100%', height: 150, mt: 20 }} />
      )}
    </Container>
  );
}

export { NewsDetails };
