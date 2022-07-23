import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  lectureTitle: String,
  lectureLink: String,
  subject: String,
  comments: [
    {
      userName: String,
      commentMessage: String,
      timeStampSeconds: Number,
    },
  ],
});

const Lecture = mongoose.model("Lecture", lectureSchema);
export default Lecture;
