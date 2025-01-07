import { connectDB } from '../connection.js';


export async function deleteUserById(id) {
    const db = await connectDB();
    await db.run('DELETE FROM users WHERE id = ?', [id]);
    await db.close();
}