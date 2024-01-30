import { getQuestionById, getQuestionByAns, getQuestionFull, addQuestion } from "../controllers/question.controller";
import express from "express";
const goRouter = express.Router();

// Lấy question theo id
goRouter.get('/:question_id', getQuestionById)

// Lấy question theo answer
goRouter.get('/:answer_id', getQuestionByAns)

// Lấy tất cả câu hỏi
goRouter.get('/', getQuestionFull)

// Thêm mới question
goRouter.post('/', addQuestion)

export default goRouter
