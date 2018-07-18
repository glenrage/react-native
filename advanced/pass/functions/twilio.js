const twilio = require('twilio');

const accountSid = 'AC5b2acb39fb365a14587565b803c3d74b';
const authToken = '7b38a875d0db1da508df55265674786d';

module.exports = new twilio.Twilio(accountSid, authToken);
