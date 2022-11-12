const db = require("../data/db-config");

async function getAll() {
  const devices = db("devices");
  const phone = db("associated_phone");
  //can be precomputed, for later optimzation
  return Promise.all([devices, phone]).then(([devices, phone]) => {
    const data = devices.map((device) => {
      device.phones = phone.filter((id) => id.device_id === device.device_id);
      return device;
    });
    return data;
  });
}

async function getDeviceByUserId(user_id) {
  return db("devices").where({ user_id });
}

async function getDeviceAssociatedPhoneNumber(device_id, user_id) {
  return db("associated_phone").where({ device_id }).andWhere({ user_id });
}

async function addDeviceToUser(device) {
    console.log(device)
    return db("devices").insert(device, ['*'])
  }

module.exports = {
  getAll,
  getDeviceByUserId,
  getDeviceAssociatedPhoneNumber,
  addDeviceToUser
};
