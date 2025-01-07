
// src/db/seed.js
import { connectDB } from './connection.js';

export async function seedDB() {
  const db = await connectDB();

  // Seed USERS table
  for (let i = 1; i <= 1000; i++) {
    await db.run(`INSERT INTO users (name, email, age) VALUES (?, ?, ?)`, [
      `User${i}`,
      `user${i}@example.com`,
      Math.floor(Math.random() * 60) + 18 // Random age between 18 and 77
    ]);
  }

  // Seed PRODUCTS table
  for (let i = 1; i <= 500; i++) {
    await db.run(`INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)`, [
      `Product${i}`,
      `Description of Product${i}`,
      (Math.random() * 100).toFixed(2), // Random price
      Math.floor(Math.random() * 1000) // Random stock
    ]);
  }

  // Seed ORDERS table
  for (let i = 1; i <= 2000; i++) {
    await db.run(`INSERT INTO orders (user_id, total, status) VALUES (?, ?, ?)`, [
      Math.floor(Math.random() * 1000) + 1, // Random user_id
      (Math.random() * 500).toFixed(2), // Random total
      ['Pending', 'Shipped', 'Delivered', 'Cancelled'][Math.floor(Math.random() * 4)] // Random status
    ]);
  }

  // Seed REVIEWS table
  for (let i = 1; i <= 1500; i++) {
    await db.run(`INSERT INTO reviews (product_id, user_id, rating, comment) VALUES (?, ?, ?, ?)`, [
      Math.floor(Math.random() * 500) + 1, // Random product_id
      Math.floor(Math.random() * 1000) + 1, // Random user_id
      Math.floor(Math.random() * 5) + 1, // Random rating
      `This is a review comment ${i}`
    ]);
  }

  // Seed LOGS table
  for (let i = 1; i <= 3000; i++) {
    await db.run(`INSERT INTO logs (action, user_id) VALUES (?, ?)`, [
      ['LOGIN', 'LOGOUT', 'PURCHASE'][Math.floor(Math.random() * 3)], // Random action
      Math.floor(Math.random() * 1000) + 1 // Random user_id
    ]);
  }

  console.log('Database seeded with test data.');
  await db.close();
}