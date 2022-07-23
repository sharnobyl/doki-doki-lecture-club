import mongoose from 'mongoose';

export const getLectures = async (req, res) => {
    console.log("GET request");
    res.status(200).json({ lectureLink: "LINK" });
}