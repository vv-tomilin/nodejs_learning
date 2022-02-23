const express = require('express');
const userRouter = require('./routes/user.routes.js');
const postRoutes = require('./routes/post.routes.js');

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRoutes);

app.listen(PORT, () => {
  console.log('\n=== SERVER STARTED ON PORT: ' + PORT + ' ===');
});