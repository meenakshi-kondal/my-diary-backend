const express = require("express");
const router = express.Router();

const diaryController = require("../controllers/diaryController");
const diaryPageController = require("../controllers/diaryPageController");

router.get("/diaries", diaryController.getAllDiaries);
router.get("/diary-detail/:diaryId", diaryController.diaryDetails);
router.post("/add-diary", diaryController.createDiary);

router.get("/get-page-content/:diaryId/:pageNumber", diaryPageController.getPagesOfDiary);
router.post("/add-page", diaryPageController.createPage);
router.post("/save-page", diaryPageController.saveOrUpdatePage);

module.exports = router;