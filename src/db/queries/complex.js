import { connectDB } from '../connection.js';

// SQL CASE
export async function userOrderSummary() {
  const db = await connectDB();
  const result = await db.all(`
    SELECT users.name,
           COUNT(orders.id) AS orderCount,
           CASE
             WHEN COUNT(orders.id) = 0 THEN 'No Orders'
             WHEN COUNT(orders.id) > 5 THEN 'Frequent Buyer'
             ELSE 'Occasional Buyer'
           END AS customerType
    FROM users
    LEFT JOIN orders ON users.id = orders.user_id
    GROUP BY users.id
  `);
  await db.close();
  return result;
}