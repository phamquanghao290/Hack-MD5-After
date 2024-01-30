import { getCategories, getCateById, addCategories } from "../controllers/categories.controller";
import express from "express";

const runRouter = express.Router();

// Lấy cate theo id
runRouter.get('/:categoryId', getCateById)

// Lấy danh sách cate
runRouter.get('/', getCategories)

// Thêm mới cate
runRouter.post('/', addCategories)

export default runRouter