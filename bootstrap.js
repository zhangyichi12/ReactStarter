var open = require('open');
const SERVER_PORT = process.env.SERVER_PORT || 8080;

require('./node_modules/webpack-dev-server/bin/webpack-dev-server.js');

open(`http://localhost:${SERVER_PORT}`, 'Google Chrome'); //webpack-dev-server default port