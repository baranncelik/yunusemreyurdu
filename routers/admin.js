const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const upload = require("../middleware/multer");
const isAunthenticated = require("../middleware/auth");



router.get("/settings", isAunthenticated , adminController.getSettings);

router.post("/settings", isAunthenticated , upload.fields([{ name: "logo_file", maxCount: 1 }, { name: "img_url", maxCount: 1 }]), adminController.postSettings);

router.get("/featureds", isAunthenticated , adminController.getFeatureds);

router.post("/featureds", isAunthenticated ,upload.single("img_url"), adminController.postFeatureds);

router.get("/announcements", isAunthenticated , adminController.getAnnouncements);

router.post("/announcements", isAunthenticated , upload.fields([{ name : "img1_url" , maxCount : 1} , { name : "img2_url" , maxCount : 1} , { name : "img3_url" , maxCount : 1} , { name : "img4_url" , maxCount : 1}]), adminController.postAnnouncements);

router.get("/sections", isAunthenticated , adminController.getSections);

router.post("/sections", isAunthenticated , upload.fields([{ name : "hedefimiz_img_url" , maxCount : 1},{ name : "gayemiz_img_url" , maxCount : 1}]) ,adminController.postSections);

router.get("/messages" , isAunthenticated , adminController.getMessages);

router.post("/messages" , isAunthenticated , adminController.postMessages);




module.exports = router;