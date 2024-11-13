import React, { useState, useEffect } from 'react';

function Slider() {
  const products = [
    {
      id: 1,
      name: 'Nike Air MX Super 2500 - Red',
      image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDgxfHxwcm9kdWN0fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=500',
      discount: 39,
      price: 449,
      originalPrice: 699,
      rating: 5,
    },{
      id: 2,
      name: 'Adidas UltraBoost 2020 - Black',
      image: 'https://images.unsplash.com/photo-1573767225713-c5f6cbfc05ba?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDgxfHxwcm9kdWN0fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=500',
      discount: 25,
      price: 199,
      originalPrice: 265,
      rating: 4,
    },
    {
      id: 3,
      name: 'Puma RS-X3 Puzzle - White',
      image: 'https://images.unsplash.com/photo-1579531660637-b7cfa2073cd3?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=500',
      discount: 30,
      price: 179,
      originalPrice: 259,
      rating: 4,
    },
    {
      id: 4,
      name: 'Reebok Classic Leather - Grey',
      image: 'https://images.unsplash.com/photo-1620031735863-d3204578fbb9?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=500',
      discount: 15,
      price: 129,
      originalPrice: 149,
      rating: 4,
    }

    // Add more products if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval);
  }, [products.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const product = products[currentIndex];

  return (
    <div className="relative mx-auto px-10 py-4 bg-gray-50">
      {/* Carousel Body */}
      <div
        className="rounded-lg block md:flex items-center bg-gray-200 shadow-xl dark:bg-gray-200 transition eas-in-out delay:300 "
        style={{ minHeight: '19rem' }}
      >
        <div
          className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          style={{ minHeight: '19rem' }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover object-center transition eas-in-out delay:300"
            src={product.image}
            alt={product.name}
          />
          <div className="absolute inset-0 w-full h-full bg-indigo-900 opacity-75 transition eas-in-out delay:300 " />
          <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white transition eas-in-out delay:300">
            <svg
              className="w-full h-24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 239 120"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="48"
                fill="White"
                fontFamily="Algerian"
              >
                MAX SHOES
              </text>
            </svg>
          </div>
        </div>
        <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg transition eas-in-out delay:300">
          <div className="p-12 md:pr-24 md:pl-16 md:py-12">
            <p className="text-gray-600">
              <span className="text-gray-900 transition eas-in-out delay:300">{product.name}</span>
              {' Step into style and confidence with footwear crafted for the trendsetter in you—where unmatched quality meets bold design for every occasion.'}
            </p>
            <a
              className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
              href="/"
            >
              <span>More</span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-0 mt-32 left-10 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline"
      >
        <span className="block" style={{ transform: 'scale(-1)' }}>
          &#x279c;
        </span>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-0 mt-32 right-10 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline"
      >
        <span className="block" style={{ transform: 'scale(1)' }}>
          &#x279c;
        </span>
      </button>
    </div>
  );
}

export default Slider;
