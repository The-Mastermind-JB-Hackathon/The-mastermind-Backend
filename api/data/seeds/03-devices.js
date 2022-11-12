exports.seed = function (knex) {
  return knex('devices').insert([
    { uuid: "b033ce76-e902-400b-9ee8-acca4883103f",user_id: 1 , device_name: "smoke alarm", alert_message: "your house is on fire"},
    { uuid: "b033ce76-e902-400b-9ee8-as2ad2adasda",user_id: 1 , device_name: "co2 alarm"},
    { uuid: "37c6eb31-1580-4dd0-9f0b-c9bf5dadd11a",user_id: 2 , device_name: "smoke alarm"},
    { uuid: "5ae59d37-91f7-44b7-922d-48999dd4a757",user_id: 3 , device_name: "smoke alarm"},
    { uuid: "ee98463d-662f-49c1-8b26-b529d7f77741",user_id: 4 , device_name: "smoke alarm"},
  ]);
};