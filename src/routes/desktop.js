import App from '../desktop/containers/App';
import Posts from '../desktop/containers/Posts';
import Comments from '../desktop/containers/Comments';
import Profile from '../desktop/containers/Profile';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/posts',
        component: Posts,
        exact: true,
      },
      {
        path: '/posts',
        component: Posts,
        exact: true,
      }, {
        path: '/comments',
        component: Comments,
      }, {
        path: '/profile',
        component: Profile,
        exact: true,
      },
    ],
  },
];

export default routes;
