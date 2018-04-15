import loadable from 'loadable-components';

const Comments = loadable(() => import('./Comments'));

module.exports = Comments;
