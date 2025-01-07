import { connectDB } from '../connection.js';

// SQL COUNT()
export async function countTotalUsers() {
    const db = await connectDB();
    const result = await db.get('SELECT COUNT(*) AS totalUsers FROM users');
    await db.close();
    return result;
}

// SQL SUM()
export async function sumOrderTotals() {
    const db = await connectDB();
    const result = await db.get('SELECT SUM(total) AS totalSales FROM orders');
    await db.close();
    return result;
}

// SQL AVG()
export async function averageOrderTotal() {
    const db = await connectDB();
    const result = await db.get('SELECT AVG(total) AS averageSales FROM orders');
    await db.close();
    return result;
}