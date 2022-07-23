import mongoose from 'mongoose';

const lectureSchema = new mongoose.Schema({
    lectureLink: String,
    comments: [{
        userName: String,
        timeStamp: String,
        comment: String,
    }]
})

const Lecture = mongoose.model('Lecture', lectureSchema);