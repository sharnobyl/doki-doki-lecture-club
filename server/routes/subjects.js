import express from 'express';
import * as subject from '../controllers/subject.js';

const router = express.Router();

router.get('/', subject.getSubjects);
router.post('/', subject.createSubject);

export default router;