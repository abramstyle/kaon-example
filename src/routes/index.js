import App from '../containers/App';
import Posts from '../containers/Posts';
import Comments from '../containers/Comments';
import Profile from '../containers/Profile';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/posts',
        exact: true,
        component: Posts,
      }, {
        path: '/comments',
        exact: true,
        component: Comments,
      }, {
        path: '/profile',
        exact: true,
        component: Profile,
      },
    ],
  },
];

export default routes;
