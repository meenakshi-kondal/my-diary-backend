const diaryPageService = require("../services/diaryPageService");

// GET pages of a diary
const getPagesOfDiary = async (req, res) => {
  try {
    const pages = await diaryPageService.getDiaryContent(req.params.diaryId, req.params.pageNumber);
    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE page
const createPage = async (req, res) => {
  try {
    const page = await diaryPageService.createPage(req.body);
    res.status(201).json(page);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const saveOrUpdatePage = async (req, res) => {
  try {
    const { diary_id, pageNumber, description } = req.body;

    const page = await diaryPageService.updateDiaryPage({
      diary_id,
      pageNumber,
      description,
    });
    res.json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPagesOfDiary,
  createPage,
  saveOrUpdatePage,
};
