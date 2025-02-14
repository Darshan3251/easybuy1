


import React, { useEffect, useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import Search from '../components/Search';

const SearchPage = () => {
  const { searchQuery, setSearchQuery } = useOutletContext();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all products from backend
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
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on search query
    if (searchQuery && searchQuery.trim() === '') {
      setFilteredProducts([]);
    } else if (searchQuery) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  const productDetails = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className="relative flex items-center">
      <div className="container mx-auto px-4 overflow-x-hidden p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                onClick={() => productDetails(product._id)}
                className="border py-2 lg:p-4 grid gap-2 min-w-[9rem] lg:min-w-[13rem] rounded-lg cursor-pointer bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
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
                <div className="px-2 lg:px-2 gap-6 flex items-center justify-between text-sm lg:text-base">
                  <div className="font-semibold text-gray-800">₹{product.price}</div>

                  {/* Add to Cart Button */}
                  <div className="w-full flex justify-center">
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-lg text-sm lg:text-base"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent the click from triggering the parent div's onClick
                        // handleAddToCart(product);
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;