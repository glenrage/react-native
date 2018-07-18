const functions = require('firebase-functions');
const createUser = require('./create_user.js');

exports.createUser = functions.https.onRequest(createUser);
