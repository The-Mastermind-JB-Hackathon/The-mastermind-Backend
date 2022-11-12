const router = require("express").Router();
const Alert = require("./alert-model");
const Twillio = require("./twillio");

router.get("/:uuid", (req, res) => {
  const uuid = req.params.uuid;
  Alert.getDevicePhonenmberByUuid(uuid)
    .then((associatedPhone) => {
      associatedPhone.map((contact) => {
        const phoneNumber = "+1" + contact.phone_number;
        const subscriberName = contact.subscriber_name;
        const message = contact.alert_message;
        Twillio.sendSMS(phoneNumber, subscriberName, message);
      });
      res.json("alert message sent");
    })
    .catch((err) => console.log(err));
});

router.post("/message/:uuid", (req, res) => {
  const uuid = req.params.uuid;
  Alert.getDevicePhonenmberByUuid(uuid)
    .then((associatedPhone) => {
      associatedPhone.map((contact) => {
        const phoneNumber = "+1" + contact.phone_number;
        const subscriberName = contact.subscriber_name;
        const message = req.body.message;
        Twillio.sendSMS(phoneNumber, subscriberName, message);
      });
      res.json("alert message sent");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
