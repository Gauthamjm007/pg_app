const express = require("express");
const router = express();
const amenetiesController = require("../app/controllers/amenetiesController.js");
const buildingController = require("../app/controllers/buildingController");
const roomController = require("../app/controllers/roomsController");
const tenantsController = require("../app/controllers/tenantsController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  //reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter
});

router.get("/ameneties", amenetiesController.list);
router.get("/ameneties/:id", amenetiesController.show);
router.post("/ameneties", amenetiesController.create);
router.put("/ameneties/:id", amenetiesController.update);
router.delete("/ameneties/:id", amenetiesController.destroy);

router.get("/building", buildingController.list);
router.get("/building/:id", buildingController.show);
router.post("/building", buildingController.create);
router.put("/building/:id", buildingController.update);
router.delete("/building/:id", buildingController.destroy);

router.get("/rooms", roomController.list);
router.get("/rooms/:id", roomController.show);
router.post("/rooms", upload.single("roomimage"), roomController.create);
router.put("/rooms/:id", roomController.update);
router.delete("/rooms/:id", roomController.destroy);

router.get("/tenants", tenantsController.list);
router.get("/tenants/:id", tenantsController.show);
router.post("/tenants", tenantsController.create);
router.put("/tenants/:id", tenantsController.update);
router.delete("/tenants/:id", tenantsController.destroy);

module.exports = router;
