"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

interface ProductPage {
    id: number,
    name: string,
    price: number,
    imageUrl: string
}

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<ProductPage[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://localhost:7017/api/Products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div className="product-list">
                <h1>Products Page</h1>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductPage
