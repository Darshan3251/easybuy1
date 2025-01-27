import BabyFood from '../assets/subcat/BabyFood.webp'
import React from 'react';
import Cookies from '../assets/subcat/Cookies.webp'
import { useNavigate } from 'react-router-dom';


const Subcategory_2 = ({ handleAddToCart }) => {
  const navigate = useNavigate()

  const productDetails = (id) => {
    navigate(`/productDetails/${id}`);
    
  };
  const products = [
    {
      id: 1,  
      name: ' baby food high protein',
      price: 587,
      weight: '5 kg',
      image: BabyFood,
    },
    {
      id: 2,
      name: 'Shakti Bhog Wheat',
      price: 345,
      weight: '5 kg',
      image: BabyFood,
    }, {
      id: 3,
      name: 'Cookies',
      price: 400,
      weight: '500 g',
      image: BabyFood,
    },
    // Add more products as needed
  ];

  return (
    <div className="relative flex items-center">
      <div className="flex gap-4 md:gap-6 lg:gap-8 container mx-auto px-4 overflow-x-scroll scrollbar-none scroll-smooth">
        {products.map((product) => (
          <div
            onClick={()=>productDetails(product.id)}
            key={product.id}
            className="border py-2 lg:p-4 grid gap-2 lg:gap-2 min-w-[9rem] lg:min-w-[13rem] rounded-lg cursor-pointer bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Image Section */}
            <div className="min-h-20 w-full max-h-24 lg:max-h-32 rounded-lg overflow-hidden">
              <img src={product.image} className="w-full h-full object-scale-down lg:scale-125" alt={product.name} />
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
            <div className="px-2 lg:px-2 text-sm lg:text-base text-gray-600">{product.weight}</div>

            {/* Price */}
            <div className="px-2 lg:px-2 gap:6 flex items-center justify-between text-sm lg:text-base">
              <div className="font-semibold text-gray-800">₹{product.price}</div>

              {/* Add to Cart Button */}
              <div className="w-full flex justify-center">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-lg text-sm lg:text-base"
                  onClick={() => handleAddToCart()}
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

export default Subcategory_2;
