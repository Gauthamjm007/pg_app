const mongoose = require("mongoose");
const axios = require("axios");

const Schema = mongoose.Schema;
const tenantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  aadhar: {
    type: String,
    required: true
  },
  pan: {
    type: String,
    required: true
  },
  room: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Room"
  },
  gender: {
    type: String,
    enum: ["male", "female"]
  }
});

tenantSchema.pre("save", function(next) {
  const name = this.name.split(" ")[0];
  axios
    .get(`https://api.genderize.io/?name=${name}`)
    .then((response) => {
      this.gender = response.data.gender;
      next();
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;
