import express from 'express';
import * as subject from '../controllers/lecture.js';

const router = express.Router();

router.get('/', subject.getLectures);

export default router;