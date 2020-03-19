const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const buildingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  location: {
    type: { type: String },
    coordinates: [Number]
  },
  building_type: {
    type: String,
    enum: ["Male PG", "Female PG", "Co-Living"]
  }
});

// {
//     "name":"Bhawana PG for Girls",
//     "address":"367, Utteregunda St, Bheemanna Garden, Lakshmiamma Garden, Shanti Nagar, Bengaluru, Karnataka 560027",
//     "contact":"+919035040742",
//     "location":{
//       "type":"Point",
//       "coordinates":[12.9606,77.5990]
//     },
//     "building_type":"Male PG"
//   }
//5e68cc7980393f11743ccc3e
//5e68cd46684e4024ac3b0244
const Building = mongoose.model("Building", buildingSchema);

module.exports = Building;
