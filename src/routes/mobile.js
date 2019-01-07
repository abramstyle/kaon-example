import App from '../mobile/containers/App';
import Posts from '../mobile/containers/Posts';
import Comments from '../mobile/containers/Comments';
import Post from '../mobile/containers/PostDetail';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Posts,
        exact: true,
      }, {
        path: '/posts',
        component: Posts,
        exact: true,
      }, {
        path: '/posts/:id',
        component: Post,
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
