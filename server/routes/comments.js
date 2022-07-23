import mongoose from 'mongoose';
import express from 'express';

import * as comment from '../controllers/comments.js';

const router = express.Router();

router.post('/lectureComment', comment.postLectureComment);

export default router;