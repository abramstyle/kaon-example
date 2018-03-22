import App from '../containers/App';
import Posts from '../containers/Posts/Posts';
import Comments from '../containers/Comments/Comments';
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
