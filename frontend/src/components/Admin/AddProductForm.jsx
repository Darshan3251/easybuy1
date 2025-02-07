import React, { useState, useRef } from 'react';

const AddProductForm = ({ fetchProducts }) => {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState('');
  const [description, setDescription] = useState('');
  const [netWeight, setNetWeight] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]); // Correcting this to 'images' for clarity
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]); // Use functional update to handle state correctly
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('categories', categories);
      formData.append('description', description);
      formData.append('netWeight', netWeight);
      formData.append('price', price);

      // Append multiple images
      images.forEach((file) => {
        formData.append("image", file); // Make sure it's "image" and not "images"
      });
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Product added successfully!');
        fetchProducts(); // Refresh product list

        // Reset the form
        setName('');
        setCategories('');
        setDescription('');
        setNetWeight('');
        setPrice('');
        setImages([]);
        if (fileInputRef.current) fileInputRef.current.value = ''; // Clear file input
      } else {
        const errorMessage = await response.text();
        console.error('Failed to add product:', errorMessage);
        alert('Error adding product: ' + errorMessage);
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
          onChange={(e) => setCategories(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Net Weight (unit, ml, gm)</label>
        <input
          type="text"
          value={netWeight}
          onChange={(e) => setNetWeight(e.target.value)}
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
        <label className="block text-gray-700">Images</label>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
        />
        {images.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index + 1}`}
                  className="w-16 h-16 object-cover rounded"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded"
                  onClick={() => handleRemoveImage(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
