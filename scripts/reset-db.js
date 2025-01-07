import fs from 'fs';

fs.unlink('./data/database.sqlite', (err) => {
  if (err) {
    console.error('Error deleting database:', err);
  } else {
    console.log('Database reset');
  }
});
