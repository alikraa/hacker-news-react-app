import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3fbd3a',
      contrastText: '#FFF',
    },
    text: {
      primary: '#000',
      secondary: '#9e9e9e',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
