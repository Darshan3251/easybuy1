import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Subcategory_1 = ({ handleAddToCart }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend API
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

    fetchProducts();
  }, []);
  

  const productDetails = (id) => {
    navigate(`/productDetails/${id}`);
    
  };



  return (
    <div className="relative flex items-center">
      <div className="flex gap-4 md:gap-6 lg:gap-8 container mx-auto px-4 overflow-x-scroll scrollbar-none scroll-smooth">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => productDetails(product._id)}
            className="border py-2 lg:p-4 grid gap-2 lg:gap-2 min-w-[9rem] lg:min-w-[13rem] rounded-lg cursor-pointer bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Image Section */}
            <div className="min-h-20 w-full max-h-24 lg:max-h-32 rounded-lg overflow-hidden">
              <img
                src={product.image?.length > 0 ? product.image[0] : 'https://via.placeholder.com/150'}
                alt={product.name}
                className="w-full h-full object-scale-down lg:scale-125"
              />
            </div>

            {/* Discount and Timing */}
            <div className="flex items-center gap-2 px-2">
              <div className="rounded text-xs w-fit p-1 px-2 text-green-600 bg-green-50">10 min</div>
              <div className="text-xs text-green-600 bg-green-100 px-2 w-fit rounded-full">2% discount</div>
            </div>

            {/* Product Name */}
            <div className="px-2 lg:px-2 font-medium text-gray-800 text-sm lg:text-base items-center break-words">
              {product.name}
            </div>

            {/* Weight */}
            <div className="px-2 lg:px-2 text-sm lg:text-base text-gray-600">{product.netWeight}</div>

            {/* Price */}
            <div className="px-2 lg:px-2 gap:6 flex items-center justify-between text-sm lg:text-base">
              <div className="font-semibold text-gray-800">₹{product.price}</div>

              {/* Add to Cart Button */}
              <div className="w-full flex justify-center">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-lg text-sm lg:text-base"
                  onClick={handleAddToCart}
                >
                  Add
                </button>
              </div>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subcategory_1;
