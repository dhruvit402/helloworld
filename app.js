const express = require('express');
const cors = require('cors');
const router = express.Router();
const productController = require('./controllers/productController');
// Get all products
router.get('/products', productController.getAllProducts);

// Create a new product
router.post('/products', productController.createProduct);

// Get a single product by ID
router.get('/products/:id', productController.getProductById);

// Update a product
router.put('/products/:id', productController.updateProduct);

// Delete a product
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;

const app = express();
const PORT = 3000; // You can change this port number if needed

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to DressStore!');
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

