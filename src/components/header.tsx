import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import { Link } from 'react-router-dom';
import { HeaderProps } from '../ts/types.ts';

function Header({ handleClick, location }: HeaderProps) {
  return (
    <AppBar
      position="static"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100px',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              color: '#FFF',
            }}
          >
            Hacker News
          </Typography>
        </Link>

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
