import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

function Header() {
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
        >
          Hacker News
        </Typography>
        <IconButton color="inherit">
          <UpdateIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export { Header };
