import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import { NewsDetails } from '../components/news-details.tsx';
import { NewsList } from '../components/news-list.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <NewsList />,
      },
      {
        path: '/news/:newsId',
        element: <NewsDetails />,
      },
    ],
  },
]);

export { router };
