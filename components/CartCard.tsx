
import React from 'react';
import { Cart } from './Cart';

interface CartCardProps {
    product: Cart
}

const CartCard: React.FC<CartCardProps> = ({ product }) => {
    return (
        <div className="product-card bg-white rounded-lg shadow-md p-4">
            <img src={product.ImageUrl} alt={product.Name} className="product-image w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="product-name text-xl font-semibold mb-2">{product.Name}</h3>
            <p className="product-price text-gray-600">${product.Price}</p>
        </div>
    );
};

export default CartCard;