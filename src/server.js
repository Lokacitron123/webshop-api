const mongoose = require('mongoose');
const { app } = require('./app');

main().catch((err) => console.log(err));

async function main() {
  console.log('Connect to DB & start server');
  mongoose.set('strictQuery', true);
  await mongoose.connect('mongodb://127.0.0.1:27017/webshop-api-js-db');
  app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
}
