const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const alienRoutes = require('./controller/controller')

const app = express();

app.use(bodyParser.json());


const url = "mongodb://localhost:27017/aliens"
// const url = "mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/aliens?replicaSet=m101"
mongoose.connect(url)
.then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use('/api/aliens', alienRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
