const app = require('./app');
const mongoose = require('mongoose');

// MongoDB connection
mongoose
  .connect('mongodb+srv://admin:admin3251@cluster0.ilzkl.mongodb.net/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = 5000;


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
