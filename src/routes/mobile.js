import App from '../mobile/containers/App';
import Posts from '../mobile/containers/Posts';
import Comments from '../mobile/containers/Comments';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Posts,
        exact: true,
      }, {
        path: '/comments',
        component: Comments,
        exact: true,
      },
    ],
  },
];

export default routes;
