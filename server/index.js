import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import subjectRoute from './routes/subjects.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/subject', subjectRoute);
// app.use('/lecture', lectureRoute);
// app.use('/comment', commentRoute);

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || 'mongodb+srv://ddlc:ddlc123@cluster0.z91exps.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
    .then(() => {
        console.log("Connected to db");
    })
    .catch((err) => {
        console.log(err);
    });

mongoose.connection.on('error', err => {
    console.log(err);
});

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
})