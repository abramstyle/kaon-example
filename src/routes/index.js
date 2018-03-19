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
        component: Posts,
      }, {
        path: '/comments',
        component: Comments,
      }, {
        path: '/profile',
        component: Profile,
      },
    ],
  },
];

export default routes;
