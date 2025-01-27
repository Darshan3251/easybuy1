// import React, { useState } from 'react';
// import Subcategory_1 from '../components/Subcategory_1';
// import Cart from '../pages/Cart';

// const ShopPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-4 container mx-auto p-4">
//       <div className="lg:w-1/2">
//         <Subcategory_1 handleAddToCart={handleAddToCart} />
//       </div>
//       <div className="lg:w-1/2">
//         <Cart cartItems={cartItems} setCartItems={setCartItems} />
//       </div>
//     </div>
//   );
// };

// export default ShopPage;
