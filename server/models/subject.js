import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
    subjectTitle: String,
    lectures: [{
        lectureLink: String,
        comments: [{
            userName: String,
            currMessage: String,
            timeStampSeconds: Number,
        }]
    }]
})

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;