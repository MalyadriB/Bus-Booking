let bus = require("../Model/res");

let getdata = (req, res) => {
  bus
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
};

let savedata = (req, res) => {
  let data = new bus(req.body);
  data
    .save()
    .then(() => {
      res.json({ msg: "ok inserted" });
    })
    .catch((err) => {
      res.json(err);
    });
};

let updateSeatSelection = (req, res) => {
  const busId = req.params.id;
  const updatedBusData = req.body;

  bus
    .findByIdAndUpdate(busId, updatedBusData, { new: true })
    .then((updatedBus) => {
      res.json(updatedBus);
    })
    .catch((err) => {
      console.error("Error updating seat selection:", err);
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = { savedata, getdata, updateSeatSelection };
