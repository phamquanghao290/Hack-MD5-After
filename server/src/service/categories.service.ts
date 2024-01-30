import db from "../../database";
export const getCategoriesById = async (id: number) => {
    const [result] = await db.query(
        `SELECT * FROM category WHERE categoryId = ${id}`
    )
    return result
}

export const getCategoriesMysql = async () => {
    const [result] = await db.query(
        `SELECT * FROM category`
    )
    return result
}

export const addCategoriesMysql = async (name: string) => {
    const [result] = await db.query(
        `INSERT INTO category (categoryName) VALUES ('${name}')`
    )
}