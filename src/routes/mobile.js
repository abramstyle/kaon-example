import App from '../mobile/containers/App';
import Posts from '../mobile/containers/Posts';
import Comments from '../mobile/containers/Comments';
import Profile from '../mobile/containers/Profile';

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
