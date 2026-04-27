const Diary = require("../models/diary");

const getAllDiaries = async () => {
  try {
    const diaries = await Diary.find();
    return diaries;
  } catch (error) {
    throw new Error("Failed to fetch diaries: " + error.message);
  }
};

const createDiary = async (data) => {
  try {
    const diary = await Diary.create(data);
    return diary;
  } catch (error) {
    // Handle Mongo validation / duplicate errors cleanly
    if (error.code === 11000) {
      throw new Error("Diary name already exists");
    }

    throw new Error("Failed to create diary: " + error.message);
  }
};

const getDiaryDetails = async (diaryId) => {
  try {
    return await Diary.findById({ _id: diaryId });
  } catch (error) {
    throw new Error("Failed to create diary: " + error.message);
  }
};

module.exports = {
  getAllDiaries,
  createDiary,
  getDiaryDetails
};  