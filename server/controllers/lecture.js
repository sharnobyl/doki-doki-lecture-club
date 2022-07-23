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

export const createSubject = async (req, res) => {};

export const deleteSubject = async (req, res) => {};

export const addLectureToSubject = async (req, res) => {
  // PATCH REQUEST
};

export const deleteLectureFromSubject = async (req, res) => {
  // PATCH REQUEST (Because we are updating the lectures list in subjects)
};
