import React, { useState } from 'react';
import fetchProducts from '../Admin/ProductList'

const AddProductForm = ({ fetchProducts }) => {
  const [name, setName] = useState('');
  const [categories, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    // Convert the image file to a Base64 string
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    try {
      const imageBase64 = image ? await toBase64(image) : null;

      const productData = {
        name,
        categories: categories,
        description,
        price,
        image: imageBase64, // Include the Base64-encoded image
      };

      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(productData), // Send JSON data
      });

      if (response.ok) {
        alert('Product added successfully!');
        fetchProducts(); // Refresh product list
        setName('');
        setCategory('');
        setDescription('');
        setPrice('');
        setImage(null);
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Product Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          value={categories}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;

// import React, { useState } from 'react';

// const AddProductForm = ({ fetchProducts }) => {
//   const [name, setName] = useState('');
//   const [categories, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('category', categories);
//     formData.append('description', description);
//     formData.append('price', price);
//     formData.append('image', image);
  
//     try {
//       const response = await fetch('http://localhost:5000/api/products', {
//         method: 'POST',
//         body: formData,
//         // Do not set Content-Type header manually when using FormData
//         // The browser will set it automatically with the correct boundary
//       });
  
//       if (response.ok) {
//         alert('Product added successfully!');
//         fetchProducts(); // Refresh product list after adding
//         setName('');
//         setCategory('');
//         setDescription('');
//         setPrice('');
//         setImage(null);
//       } else {
//         console.error('Failed to add product');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
//       <div className="mb-4">
//         <label className="block text-gray-700">Product Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Category</label>
//         <input
//           type="text"
//           value={categories}
//           onChange={(e) => setCategory(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Description</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Price</label>
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Image</label>
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full p-2 border rounded"
         
//         />
//       </div>
//       <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//         Add Product
//       </button>
//     </form>
//   );
// };

// export default AddProductForm;


// import React, { useState } from 'react';

// const   AddProductForm = ({ addProduct }) => {
//   const [name, setName] = useState('');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newProduct = { name, category, description, price, image };
//     addProduct(newProduct);
//     setName('');
//     setCategory('');
//     setDescription('');
//     setPrice('');
//     setImage(null);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
//       <div className="mb-4">
//         <label className="block text-gray-700">Product Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Category</label>
//         <input
//           type="text"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Description</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Price</label>
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Image</label>
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//         Add Product
//       </button>
//     </form>
//   );
// };

// export default AddProductForm;