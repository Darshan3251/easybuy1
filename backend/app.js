

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
 
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




const productRoutes = require('./routes/productRoutes');

app.use('/api', productRoutes);
module.exports = app;