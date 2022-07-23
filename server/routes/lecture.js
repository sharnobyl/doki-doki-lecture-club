import express from "express";
import * as lecture from "../controllers/lecture.js";

const router = express.Router();

router.get("/", lecture.getLectures);
router.post("/:id/comment", lecture.commentLecture);

export default router;
