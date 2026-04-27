const DiaryPage = require("../models/diaryPages");
const Diary = require("../models/diary");

const getDiaryContent = async (diaryId, pageNumber) => {
  try {
    return await DiaryPage.findOne({ diary_id: diaryId, pageNumber });
  } catch (error) {
    throw new Error("Failed to fetch pages: " + error.message);
  }
};

const createPage = async (data) => {
  try {
    return await DiaryPage.create(data);
  } catch (error) {
    if (error.code === 11000) {
      throw new Error("Page already exists for this number");
    }
    throw new Error("Failed to create page: " + error.message);
  }
};

const updateDiaryPage = async ({diary_id, pageNumber, description}) => {
  try {
    const page = await DiaryPage.findOneAndUpdate(
      { diary_id, pageNumber },
      { description },
      { upsert: true, new: true },
    );

   await Diary.findOneAndUpdate(
      {
        _id: diary_id,
        occupiedPages: { $lt: pageNumber },
      },
      {
        $set: { occupiedPages: pageNumber },
      }
    );
    return page;
  } catch (error) {
    throw new Error("Failed to create page: " + error.message);
  }
};

module.exports = {
  getDiaryContent,
  createPage,
  updateDiaryPage,
};
