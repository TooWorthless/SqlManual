import { connectDB } from '../connection.js';


export async function insertUser(name, email, age) {
    const db = await connectDB();
    await db.run('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [name, email, age]);
    await db.close();
}