const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const amenitiesSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

//5e68c45aa38f322430d41ff9
//5e68c466a38f322430d41ffa
const Amenities = mongoose.model("Amenities", amenitiesSchema);

module.exports = Amenities;
