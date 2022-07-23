import express from 'express';
import * as lecture from '../controllers/lectures.js';

const router = express.Router();

router.get('/', lecture.getLectures);

export default router;