import { connectDB } from './connection.js';

export async function getAllUsers() {
  const db = await connectDB();
  const users = await db.all('SELECT * FROM users');
  await db.close();
  return users;
}

export async function getUserOrders(userId) {
  const db = await connectDB();
  const orders = await db.all('SELECT * FROM orders WHERE user_id = ?', [userId]);
  await db.close();
  return orders;
}
