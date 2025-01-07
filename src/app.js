import { initDB } from './db/init.js';
import { seedDB } from './db/seed.js';
import { getAllUsers, getUserOrders } from './db/queries.js';
import { averageOrderTotal, countTotalUsers, sumOrderTotals } from './db/queries/aggregation.js';

async function main() {
    //   await initDB();
    //   await seedDB();

    console.log(await countTotalUsers());
    console.log(await sumOrderTotals());
    console.log(await averageOrderTotal());

    // console.log('All Users:', await getAllUsers());
    // console.log('Orders for User 1:', await getUserOrders(1));
}

main().catch(console.error);
