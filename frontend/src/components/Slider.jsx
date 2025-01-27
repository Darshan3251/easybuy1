import React, { useRef } from 'react';

const Slider = ({ title, items, seeAllLink, renderItem }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="my-6">
      {/* Section Title */}
      <div className="flex justify-between items-center p-4">
        <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
        {seeAllLink && (
          <a
            className="text-green-600 hover:text-green-400"
            href={seeAllLink}
          >
            See All
          </a>
        )}
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transform -translate-y-1/2 top-1/2"
          aria-label="Scroll Left"
        >
          &#9664;
        </button>

        {/* Slider Content */}
        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-scroll scrollbar-none scroll-smooth"
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              {renderItem(item, index)}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transform -translate-y-1/2 top-1/2"
          aria-label="Scroll Right"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Slider;
