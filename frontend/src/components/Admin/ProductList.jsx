import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Function to fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to handle product deletion
  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: 'DELETE', // DELETE method to remove the product
      });

      if (response.ok) {
        // Remove the deleted product from the UI by filtering it out
        setProducts(products.filter(product => product._id !== productId));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when component mounts
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Product List</h2>
      {products.length === 0 ? (
        <p className="text-center text-lg">No products added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={product.image?.length > 0 ? product.image[0] : 'https://via.placeholder.com/150'}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-500">Category: {product.categories}</p>
                <p className="text-gray-700 mt-2">{product.description}</p>
                <p className="text-gray-700 mt-2">{product.netWeight}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
              </div>
              <div className="flex justify-between items-center p-4">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
