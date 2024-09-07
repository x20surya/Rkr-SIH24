import React, { useState } from 'react';
import ProductCard from './ProductCard'; 
import { ArrowLeft, ArrowRight } from 'lucide-react';

const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://picsum.photos/200' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://picsum.photos/200' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://picsum.photos/200' },
    { id: 4, name: 'Product 4', price: 400, image: 'https://picsum.photos/200' },
    { id: 5, name: 'Product 5', price: 500, image: 'https://picsum.photos/200' }
];

const SimilarProduct = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - itemsPerPage : prevIndex - itemsPerPage));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage));
    };

    return (
        <div className="relative p-5 hidden lg:block w-full">
    <h2 className="scroll-m-20 border-b pb-2   text-3xl font-semibold text-left relative left-4 tracking-tight first:mt-0">
        Similar Products
    </h2>
    <br />
    <div className="flex overflow-hidden space-x-4 w-full sm:w-3/4 md:w-[1080px] mx-auto">
        <div className="flex ml-7 gap-5 mb-4 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
            {products.map((product, index) => (
                <div
                    key={index}
                    className="flex-none w-full sm:w-1/2 md:w-1/3"
                >
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    </div>
    <button
        onClick={handlePrev}
        className="absolute  top-1/2 transform -translate-y-1/2 p-2 rounded-full"
    >
        <ArrowLeft size={24} />
    </button>
    <button
        onClick={handleNext}
        className="lg:absolute lg:right-6 lg:top-1/2 transform -translate-y-1/2 p-2 rounded-full relative right-0"
    >
        <ArrowRight size={24} />
    </button>
</div>
    );
};

export default SimilarProduct;