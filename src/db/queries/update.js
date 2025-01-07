import { connectDB } from '../connection.js';


export async function updateUserEmail(id, newEmail) {
    const db = await connectDB();
    await db.run('UPDATE users SET email = ? WHERE id = ?', [newEmail, id]);
    await db.close();
}