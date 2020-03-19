const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const roomSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  occupancy: {
    type: Number,
    required: true
  },
  building: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Building"
  },
  price: {
    type: Number,
    required: true
  },
  amenities: {
    type: [{ _id: { type: Schema.Types.ObjectId, ref: "Amenities" } }],
    required: true
  },
  roomimg: {
    type: String
  }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;

//ameneties
//5e68e2a998b7ac38ac2a60f9

//building
//5e68cc7980393f11743ccc3e
//5e68cd46684e4024ac3b0244
