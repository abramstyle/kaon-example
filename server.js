// require('babel-polyfill');
// require('babel-register')({
//   plugins: ['transform-es2015-modules-commonjs'],
//   // ignore: '/app',
// });

const dotenv = require('dotenv');
const app = require('./app');
// const envHelper = require('./helpers/env');

dotenv.config();
// envHelper.config();

// if (__PROD__ || __RELEASE__) {
// }

app()();
