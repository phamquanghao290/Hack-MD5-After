import db from "../../database";

export const getQuestionByIdMysql = async (id: number) => {
    const [result] = await db.query(
        `SELECT * FROM question WHERE question_id = ${id}`
    )
    return result
}

export const getQuestionByAnsMysql = async (id: number) => {
    const [result] = await db.query(
        `SELECT * FROM question WHERE answer_id = ${id}`
    )
    return result
}

export const getQuestionFullMysql = async (id: number, limit: number, level: number) => {
    const [result] = await db.query(
        `SELECT * FROM question WHERE question.category_id = ${id} AND question.level = ${level} ORDER BY RAND() LIMIT ${limit}`
    )
    return result
}

export const addQuestionMysql = async (content: string, category_id: number) => {
    const [result] = await db.query(
        `INSERT INTO question (content, category_id) VALUES ('${content}', ${category_id})`
    )
    return result
}