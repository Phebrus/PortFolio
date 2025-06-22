import React, { useState } from 'react';
import { X } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  /* ---------- shared slomo smooth-scroll helper ---------- */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const startPosition = window.scrollY;
    const targetPosition = element.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 800;          // adjust for faster/slower
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (elapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };
  /* ------------------------------------------------------- */

const products = [
  { id: 1, name: 'STARGRIND T-shirt (black)', price: '$35', image: '/assests/blackmain.jpg' },
  { id: 2, name: 'STARGRIND T-shirt (white)', price: '$35', image: '/assests/tetri.jpg' },
  { id: 3, name: 'STARGRIND T-shirt (blue)',  price: '$35', image: '/assests/blue.jpg'  },
];


  const openModal = (product: any) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">STARGRIND Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each piece is crafted with premium materials and attention to detail. Built to last,
              designed to fit perfectly into your daily routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="group">
                <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div
                    className="aspect-square overflow-hidden cursor-pointer"
                    onClick={() => openModal(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-xl font-bold text-gray-900 mb-4">{product.price}</p>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-gray-900 text-white py-3 font-semibold hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transform hover:scale-105"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Product Modal ---------- */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-900" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-square">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
                <p className="text-2xl font-bold text-gray-900 mb-6">{selectedProduct.price}</p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Premium quality T-shirt crafted with the finest materials. Designed for comfort and
                  durability, this essential piece will become a staple in your wardrobe. Perfect for
                  everyday wear with a timeless design that never goes out of style.
                </p>
                <button
                  onClick={() => {
                    closeModal();
                    scrollToSection('contact');
                  }}
                  className="bg-gray-900 text-white py-4 px-8 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transform hover:scale-105"
                >
                  Contact Us to Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
