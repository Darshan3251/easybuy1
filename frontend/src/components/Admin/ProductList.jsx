import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Function to fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data); // Set products in state
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when component mounts
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index} className="mb-4 border-b pb-2">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p>Category: {product.categories}</p>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              {product.image && (
                <img
                  src={`http://localhost:5000/uploads/${product.image}`} // Correct image path
                  alt={product.name}
                  className="w-32 h-32 object-cover mt-2"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
