import { getQuestionByIdMysql, getQuestionByAnsMysql, getQuestionFullMysql, addQuestionMysql } from '../service/question.service';
import express, { Request, Response } from 'express';

export const getQuestionById = async (req: Request, res: Response) => {
    const { question_id } = req.params
    const result = await getQuestionByIdMysql(Number(question_id))
    res.status(200).json(result)
}

export const getQuestionByAns = async (req: Request, res: Response) => {
    const { answer_id } = req.params
    const result = await getQuestionByAnsMysql(Number(answer_id))
    res.status(200).json(result)
}

export const getQuestionFull = async (req: Request, res: Response) => {
    const { category_id, limit, level } = req.params
    const result = await getQuestionFullMysql(Number(category_id), Number(limit), Number(level))
    res.status(200).json(result)
}

export const addQuestion = async (req: Request, res: Response) => {
    const { content, category_id } = req.body
    const result = await addQuestionMysql(content, Number(category_id))
    res.status(200).json({
        message:"Thêm mới thành công",
        result
    })
}

