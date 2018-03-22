const Kaon = require('kaon.js');
const config = require('./config/kaon.config');

const kaon = new Kaon(config);

kaon.start();
