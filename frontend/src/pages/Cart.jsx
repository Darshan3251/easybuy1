// import React from 'react';
// import { MdDelete } from 'react-icons/md';

// const Cart = ({ cartItems = [], setCartItems }) => {
//   const handleQuantityChange = (id, delta) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === id
//           ? { ...item, quantity: Math.max(1, item.quantity + delta) }
//           : item
//       )
//     );
//   };

//   const handleDeleteItem = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
//   };

//   const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Cart</h1>
//       <table className="w-full mb-4">
//         <thead>
//           <tr>
//             <th className="p-2 text-left">Product</th>
//             <th className="p-2">Quantity</th>
//             <th className="p-2 text-right">Subtotal</th>
//             <th className="p-2 text-center">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item) => (
//             <tr key={item._id}>
//               <td className="p-2">{item.name}</td>
//               <td className="p-2 text-center">
//                 <button
//                   className="px-2 py-1 bg-green-200 rounded hover:bg-green-300"
//                   onClick={() => handleQuantityChange(item._id, -1)}
//                 >
//                   -
//                 </button>
//                 <span className="px-4">{item.quantity}</span>
//                 <button
//                   className="px-2 py-1 bg-green-200 rounded hover:bg-green-300"
//                   onClick={() => handleQuantityChange(item._id, 1)}
//                 >
//                   +
//                 </button>
//               </td>
//               <td className="p-2 text-right">₹{item.price * item.quantity}</td>
//               <td className="p-2 text-center">
//                 <button
//                   className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   onClick={() => handleDeleteItem(item._id)}
//                 >
//                   <MdDelete />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="bg-green-50 p-4 rounded shadow">
//         <h2 className="text-xl font-bold mb-4">Cart totals</h2>
//         <div className="flex justify-between mb-2">
//           <span className="font-medium">Subtotal</span>
//           <span>₹{subtotal}</span>
//         </div>
//         <div className="flex justify-between font-bold text-lg">
//           <span>Total</span>
//           <span>₹{subtotal}</span>
//         </div>
//         <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useCart } from '../components/CartContaxt';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

    const handleQuantityChange = (id, delta) => {
        updateQuantity(id, delta);
    };

    const handleDeleteItem = (id) => {
        removeFromCart(id);
    };

    const subtotal = getCartTotal();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            <table className="w-full mb-4">
                <thead>
                    <tr>
                        <th className="p-2 text-left">Product</th>
                        <th className="p-2">Quantity</th>
                        <th className="p-2 text-right">Subtotal</th>
                        <th className="p-2 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item._id}>
                            <td className="p-2">{item.name}</td>
                            <td className="p-2 text-center">
                                <button
                                    className="px-2 py-1 bg-green-200 rounded hover:bg-green-300"
                                    onClick={() => handleQuantityChange(item._id, -1)}
                                >
                                    -
                                </button>
                                <span className="px-4">{item.quantity}</span>
                                <button
                                    className="px-2 py-1 bg-green-200 rounded hover:bg-green-300"
                                    onClick={() => handleQuantityChange(item._id, 1)}
                                >
                                    +
                                </button>
                            </td>
                            <td className="p-2 text-right">₹{item.price * item.quantity}</td>
                            <td className="p-2 text-center">
                                <button
                                    className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() => handleDeleteItem(item._id)}
                                >
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="bg-green-50 p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Cart totals</h2>
                <div className="flex justify-between mb-2">
                    <span className="font-medium">Subtotal</span>
                    <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{subtotal}</span>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;