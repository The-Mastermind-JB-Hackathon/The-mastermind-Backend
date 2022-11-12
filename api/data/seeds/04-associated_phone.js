exports.seed = function (knex) {
  return knex("associated_phone").insert([
    {
      phone_number: "4793048383",
      subscriber_name: "alex",
      device_id: 1,
      user_id: 1,
    },
    {
      phone_number: "4793048383",
      subscriber_name: "alex",
      device_id: 2,
      user_id: 2,
    },
    {
      phone_number: "4793048383",
      subscriber_name: "alex",
      device_id: 3,
      user_id: 3,
    },
    {
      phone_number: "4793048383",
      subscriber_name: "alex",
      device_id: 4,
      user_id: 4,
    },
  ]);
};
