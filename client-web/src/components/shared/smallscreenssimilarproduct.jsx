import React from 'react';
import ProductCard from './ProductCard';

const SmallScreensSimilarProduct = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
        { id: 4, name: 'Product 4', price: 40 },
    ];

    return (
        <div>
            <h2 className=" lg:hidden scroll-m-20 border-b pb-2 mb-5  text-3xl font-semibold text-left ml-4  tracking-tight first:mt-0">
        Similar Products
    </h2>
        <div className="grid grid-rows-2 grid-cols-2 gap-5 mb-5  lg:hidden">
            
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
    );
};

export default SmallScreensSimilarProduct;