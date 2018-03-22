const Kaon = require('kaon');
const config = require('./config/kaon.config');

const kaon = new Kaon(config);

kaon.start();
