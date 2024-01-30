import express, { Request, Response } from 'express';
import { getCategoriesById, getCategoriesMysql, addCategoriesMysql } from '../service/categories.service';

export const getCateById = async (req: Request, res: Response) => {
    const { categoryId } = req.params
    const result = await getCategoriesById(Number(categoryId))
    res.status(200).json(result)
}

export const getCategories = async (req: Request, res: Response) => {
    const result = await getCategoriesMysql()
    res.status(200).json(result)
}

export const addCategories = async (req: Request, res: Response) => {
    const { name } = req.body
    const result = await addCategoriesMysql(name)
    res.status(200).json({
        message:"Thêm mới thành công",
        result
    })
}