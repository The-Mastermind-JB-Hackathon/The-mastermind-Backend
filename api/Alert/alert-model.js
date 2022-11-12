const db = require("../data/db-config");


async function getDevicePhonenmberByUuid(uuid) {
  return db("devices").where({ uuid })
  .join('associated_phone', 'devices.device_id', '=', 'associated_phone.device_id')
  .select('phone_number','subscriber_name','alert_message')
}

module.exports = {
    getDevicePhonenmberByUuid,
};
