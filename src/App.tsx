import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/header.tsx';
import { homePath } from './ts/consts.ts';
import { useAppDispatch } from './store/hooks.ts';
import { fetchNewsIds } from './store/news-slice.ts';
import { baseUrl, dataType } from './ts/request.ts';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [currentLocation, setCurrentLocation] = useState(true);

  const url = `${baseUrl}${dataType}.json`;

  useEffect(() => {
    dispatch(fetchNewsIds(url));
  }, []);

  useEffect(() => {
    if (location.pathname === homePath) {
      setCurrentLocation(true);
    } else {
      setCurrentLocation(false);
    }
  }, [location.pathname]);

  const update = () => {
    dispatch(fetchNewsIds(url));
  };

  return (
    <>
      <Header handleClick={update} location={currentLocation} />
      <Outlet />
    </>
  );
}

export default App;
