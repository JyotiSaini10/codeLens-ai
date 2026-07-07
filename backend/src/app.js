const express = require('express');
const aiRoutes = require('./services/routes/ai.routes');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/ai', aiRoutes);
module.exports = app;