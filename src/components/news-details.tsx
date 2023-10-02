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

function NewsDetails() {
  return (
    <Container maxWidth="md" sx={{ mt: '30px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" size="large" sx={{ fontSize: 17 }}>
          <KeyboardBackspaceIcon
            fontSize="small"
            color="inherit"
            sx={{ mr: '5px' }}
          />
          Back
        </Button>
        <Button variant="outlined" size="large" sx={{ fontSize: 17 }}>
          See News
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '20px',
        }}
      >
        <Typography fontSize={20}>
          <TodayIcon fontSize="medium" sx={{ mr: 1, verticalAlign: 'sub' }} />
          Date
        </Typography>
        <Typography fontSize={20}>
          <PersonIcon fontSize="medium" sx={{ mr: 1, verticalAlign: 'sub' }} />
          Author
        </Typography>
      </Box>

      <Typography variant="h4" component="div" sx={{ mt: 5, mb: 15 }}>
        Name
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography fontSize={19}>
          <ForumOutlinedIcon sx={{ mr: 2, verticalAlign: 'sub' }} />1
        </Typography>
        <IconButton color="inherit" sx={{ verticalAlign: 'sub' }}>
          <UpdateIcon />
        </IconButton>
      </Box>
      <Divider color="inherit" />
    </Container>
  );
}

export { NewsDetails };
