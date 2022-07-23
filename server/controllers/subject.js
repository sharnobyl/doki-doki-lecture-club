import mongoose from 'mongoose';
import Subject from '../models/subject.js';

export const getSubjects = async (req, res) => {
    
    try {
        const subjects = await Subject.find({});
        console.log(subjects);
        res.json(subjects);
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
}

export const createSubject = async (req, res) => {
    const subject = req.body;
    const newSubject = new Subject({
        subjectTitle: "",
        lectures: [{
            lectureLink: "",
            comments: [{
                userName: "",
                currMessage: "",
                timeStamp: 0,
            }]
        }]
    });

    try {
        await newSubject.save();

        res.status(201).json(newSubject);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteSubject = async (req, res) => {

}

export const addLectureToSubject = async (req, res) => {
    // PATCH REQUEST
}

export const deleteLectureFromSubject = async (req, res) => {
    // PATCH REQUEST (Because we are updating the lectures list in subjects)
}