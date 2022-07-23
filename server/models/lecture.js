import mongoose from 'mongoose';

const lectureSchema = new mongoose.Schema({
    lectureTitle: String,
    lectureLink: String,
    comments: [{
        userName: String,
        currMessage: String,
        timeStampSeconds: Number,
    }]
})

const Lecture = mongoose.model('Lecture', lectureSchema);
export default Lecture;