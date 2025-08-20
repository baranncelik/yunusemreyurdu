const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");
const isAunthenticated = require("../middleware/auth");

router.get("/", userControllers.getIndex);


router.post("/" ,userControllers.postIndex);


router.get("/video", userControllers.getVideo);


router.post("/video" ,userControllers.postVideo);

module.exports = router;