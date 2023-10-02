import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Alert } from '@mui/material';
import { Header } from './components/header.tsx';
import { MAX_NEWS, NEWS_INCREMENT } from './ts/consts.ts';
import './App.css';

function App() {
  const [end, setEnd] = useState(NEWS_INCREMENT);
  const [message, setMessage] = useState(false);

  const showMore = () => {
    if (end === MAX_NEWS) {
      setEnd(MAX_NEWS);
      setMessage(true);
    }
    setEnd((prev) => prev + NEWS_INCREMENT);
  };

  return (
    <>
      <Header />
      <Outlet />
      {message ? (
        <Alert
          severity="success"
          onClose={() => {
            setMessage(false);
          }}
          sx={{
            width: 400,
            position: 'fixed',
            right: 20,
            bottom: 10,
            fontSize: 20,
          }}
        >
          All News has been loaded
        </Alert>
      ) : (
        ''
      )}
    </>
  );
}

export default App;
