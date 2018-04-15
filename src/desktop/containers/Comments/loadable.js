import loadable from 'loadable-components';

const Comments = loadable(() => import(/* webpackChunkName: "comments" */'./Comments'));

module.exports = Comments;
