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
        <div className="container mx-auto p-6 max-w-4xl">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Shopping Cart</h1>
            <div className="bg-white shadow-lg rounded-lg p-4 overflow-x-auto">
                {cartItems.length > 0 ? (
                    <table className="w-full border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b bg-gray-100 text-gray-600">
                                <th className="p-3 text-left">Product</th>
                                <th className="p-3 text-center">Quantity</th>
                                <th className="p-3 text-right">Subtotal</th>
                                <th className="p-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item._id} className="border-b hover:bg-gray-50">
                                    <td className="p-4 font-medium text-gray-700">{item.name}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                onClick={() => handleQuantityChange(item._id, -1)}
                                            >
                                                -
                                            </button>
                                            <span className="text-lg font-semibold">{item.quantity}</span>
                                            <button
                                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                onClick={() => handleQuantityChange(item._id, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-4 text-right font-medium">₹{item.price * item.quantity}</td>
                                    <td className="p-4 text-center">
                                        <button
                                            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                                            onClick={() => handleDeleteItem(item._id)}
                                        >
                                            <MdDelete size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-600">Your cart is empty.</p>
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Cart Totals</h2>
                    <div className="flex justify-between text-gray-700 text-lg mb-2">
                        <span>Subtotal:</span>
                        <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                        <span>Total:</span>
                        <span>₹{subtotal}</span>
                    </div>
                    <button className="mt-4 w-full py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition duration-300">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;