import { connectDB } from '../connection.js';


export async function selectAllUsers() {
    const db = await connectDB();
    const result = await db.all('SELECT * FROM users');
    await db.close();
    return result;
}


export async function selectDistinctStatuses() {
    const db = await connectDB();
    const result = await db.all('SELECT DISTINCT status FROM orders');
    await db.close();
    return result;
}


export async function selectUsersOverAge(age) {
    const db = await connectDB();
    const result = await db.all('SELECT * FROM users WHERE age > ?', [age]);
    await db.close();
    return result;
}


export async function selectUsersOrderedByAge() {
    const db = await connectDB();
    const result = await db.all('SELECT * FROM users ORDER BY age DESC');
    await db.close();
    return result;
}