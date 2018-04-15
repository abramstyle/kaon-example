import loadable from 'loadable-components';

const Comments = loadable(() => import(/* webpackChunkName: "posts" */'./Posts'));

module.exports = Comments;
