const diaryService = require("../services/diaryService");

// GET ALL DIARIES
const getAllDiaries = async (req, res) => {
  try {
    const diaries = await diaryService.getAllDiaries();
    res.status(200).json(diaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const diaryDetails = async (req, res) => {
  try {
    const detail = await diaryService.getDiaryDetails(req.params.diaryId);
    res.status(200).json(detail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE NEW DIARY
const createDiary = async (req, res) => {
  try {
    const { user_id, name } = req.body;

    // basic validation
    if (!user_id || !name) {
      return res.status(400).json({
        message: "user_id and name are required",
      });
    }

    const diary = await diaryService.createDiary({
      user_id,
      name,
      totalPages: req.body.totalPages || 100,
      occupiedPages: req.body.occupiedPages || 0,
      lastActivity: req.body.lastActivity || null,
    });

    res.status(201).json(diary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllDiaries,
  createDiary,
  diaryDetails
};