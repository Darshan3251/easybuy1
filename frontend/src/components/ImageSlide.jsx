import React, { useState } from "react";

const ProductImageSlider = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (images.length === 0) {
    return <p className="text-center text-gray-500">No images available</p>;
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      {/* Main Image Display */}
      <div className="bg-white rounded lg:h-[65vh] h-56 w-full overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={images[currentImageIndex]}
          alt="Product"
        />
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-3 my-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 lg:w-5 lg:h-5 rounded-full cursor-pointer ${
              index === currentImageIndex ? "bg-slate-300" : "bg-slate-200"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-4 overflow-x-auto scrollbar-none">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-20 h-20 cursor-pointer shadow-md ${
              index === currentImageIndex ? "ring-2 ring-green-600" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
