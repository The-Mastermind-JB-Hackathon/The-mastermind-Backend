const router = require("express").Router();
const Device = require("./device-model");
const restricted = require("../middleware/restricted");

router.get("/getall", (req, res) => {
  Device.getAll().then((data) => {
    res.json(data);
  });
});

router.get("/", restricted, (req, res) => {
  const user_id = req.decodedJwt.user_id;
  Device.getDeviceByUserId(user_id).then((data) => {
    res.json(data);
  });
});

router.get(
  "/getDeviceAssociatedPhoneNumber/:device_id",
  restricted,
  (req, res) => {
    const user_id = req.decodedJwt.user_id;
    const device_id = req.params.device_id;
    Device.getDeviceAssociatedPhoneNumber(device_id, user_id).then((data) => {
      res.json(data);
    });
  }
);

router.post("/add_device", restricted, (req, res) => {
    console.log("here")
  const user_id = req.decodedJwt.user_id;
  const device = {
    uuid: req.body.uuid,
    user_id,
    device_name: req.body.device_name,
    alert_message: req.body.alert_message,
  };
  Device.addDeviceToUser(device).then((data) => {
    res.json(data);
  });
});

module.exports = router;
