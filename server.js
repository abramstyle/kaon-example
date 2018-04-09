const Kaon = require('kaonjs');
const config = require('./config/kaon.config');

const kaon = new Kaon(config);

kaon.start();
