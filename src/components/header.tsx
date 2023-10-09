import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

function Header({ handleClick, location }) {
  return (
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
        {location ? (
          <IconButton color="inherit" onClick={handleClick}>
            <UpdateIcon />
          </IconButton>
        ) : (
          ''
        )}
      </Toolbar>
    </AppBar>
  );
}

export { Header };
