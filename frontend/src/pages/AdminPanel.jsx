import React from 'react';
import AddProductForm from '../components/Admin/AddProductForm';
import ProductList from '../components/Admin/ProductList';

const AdminPanel = () => {
  const [products, setProducts] = React.useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default AdminPanel;