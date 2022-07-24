import mongoose from "mongoose";
import Lecture from "../models/lecture.js";

export const getLectures = async (req, res) => {
  try {
    const subjects = await Lecture.find({});
    res.json(subjects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const commentLecture = async (req, res) => {
  const { id } = req.params;
  const comment = req.body;

  try {
    const lecture = await Lecture.findById(id);

    lecture.comments.push(comment);
    const updatedLecture = await Lecture.findByIdAndUpdate(id, lecture, {
      new: true,
    });

    res.json(updatedLecture);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// WIP
// export const createLecture = async (req, res) => {};

// export const deleteLecture = async (req, res) => {};
