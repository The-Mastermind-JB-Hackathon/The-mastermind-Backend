const accountSid = process.env.TWILLIO_SID || null;
const authToken = process.env.TWILLIO_TOKEN || null;
const client = require("twilio")(accountSid, authToken);

function sendSMS(phoneNumber, name, message) {
  client.messages
    .create({
      body: `hi ${name}, ${message}`,
      from: "+14793982731",
      to: '+14793048383',
    })
    .then((message) => console.log(message.sid)).catch(err => console.log(err))
}

module.exports = {
  sendSMS,
};
