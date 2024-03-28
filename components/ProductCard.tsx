import React from 'react';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const handleAddToCart = async () => {
        try {
            const response = await fetch(`https://localhost:7017/api/Cart/add?productId=${product.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log(`Product ${product.name} added to cart`);
                alert(`Product ${product.name} added to cart`);
            } else {
                console.error('Failed to add product to cart');
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    return (
        <div className="product-card bg-white rounded-lg shadow-md p-4">
            <img src={product.imageUrl} alt={product.name} className="product-image w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="product-name text-xl font-semibold mb-2">{product.name}</h3>
            <p className="product-price text-gray-600">${product.price}</p>
            <button
                onClick={handleAddToCart}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;