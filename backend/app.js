

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import Routes
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes'); // Add this
const cartRoutes = require('./routes/cart'); // Add this


// Use Routes
app.use('/api', productRoutes);
app.use('/api', authRoutes); // Add this
app.use("/api/cart",cartRoutes);

module.exports = app;
