import mongoose from "mongoose";
import Lecture from "../models/lecture.js";

export const getLectures = async (req, res) => {
  try {
    const subjects = await Lecture.find({});
    res.json(subjects);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

export const commentLecture = async (req, res) => {
  const { id } = req.params;
  const { commentMessage } = req.body;

  const lecture = await Lecture.findById(id);

  lecture.comments.push(commentMessage);

  const updatedLecture = await Lecture.findByIdAndUpdate(id, lecture, {
    new: true,
  });

  res.json(updatedLecture);
};

export const createSubject = async (req, res) => {};

export const deleteSubject = async (req, res) => {};

export const addLectureToSubject = async (req, res) => {
  // PATCH REQUEST
};

export const deleteLectureFromSubject = async (req, res) => {
  // PATCH REQUEST (Because we are updating the lectures list in subjects)
};
