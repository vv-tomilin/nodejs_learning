const express = require('express');

const bookRouter = require('./routes/book.routes.js');

const PORT = 3030;
const app = express();

app.use(express.json());
app.use('/api', bookRouter);

app.listen(PORT, () => {
  console.log('\n---- Server runing ----\n');
});