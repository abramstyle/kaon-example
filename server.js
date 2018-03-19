const Keon = require('keon');
const config = require('./config/keon.config');

const keon = new Keon(config);

keon.start();
