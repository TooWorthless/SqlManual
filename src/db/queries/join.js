import { connectDB } from '../connection.js';

// SQL JOIN
export async function getUserOrders() {
    const db = await connectDB();
    const result = await db.all(`
      SELECT users.name, orders.total, orders.status
      FROM users
      INNER JOIN orders ON users.id = orders.user_id
    `);
    await db.close();
    return result;
}

// SQL LEFT JOIN
export async function getUsersWithOrWithoutOrders() {
    const db = await connectDB();
    const result = await db.all(`
      SELECT users.name, orders.total
      FROM users
      LEFT JOIN orders ON users.id = orders.user_id
    `);
    await db.close();
    return result;
}

// SQL FULL OUTER JOIN (simulated using UNION)
export async function getAllUsersAndOrders() {
    const db = await connectDB();
    const result = await db.all(`
      SELECT users.name AS username, NULL AS total
      FROM users
      UNION
      SELECT NULL AS username, orders.total
      FROM orders
    `);
    await db.close();
    return result;
}