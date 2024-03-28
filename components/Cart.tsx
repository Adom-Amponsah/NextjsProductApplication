"use client"


import React, { useEffect, useState } from 'react'
import CartCard from './CartCard';


export interface Cart {
    id: number,
    Product: string,
    Quantity: number,
    Name: string,
    Price: number,
    ImageUrl: string
}


const CartPage: React.FC = () => {
    const [carts, setCarts] = useState<Cart[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://localhost:7017/api/Cart/carts');
            const data = await response.json();
            setCarts(data);
        };

        fetchProducts();
    }, []);
    return (
        <div>
            <h1>My Cart Table</h1>
            {
                carts.map((cart) => (
                    <CartCard product={cart} key={cart.id} />
                ))
            }
        </div>
    )
}

export default CartPage
