// OrderSummaryComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderSummaryComponent = () => {
    const [orderSummary, setOrderSummary] = useState({
        items: [],
        subtotal: 0,
        discount: 0,
        total: 0,
    });

    // Fetch order summary from backend
    const fetchOrderSummary = async () => {
        try {
            const response = await axios.get('http://localhost:3000/order-summary');
            setOrderSummary(response.data);
        } catch (error) {
            console.error('Error fetching order summary:', error);
        }
    };

    // Automatically fetch order summary when component mounts or updates
    useEffect(() => {
        fetchOrderSummary();
    }, []);

    // Add item to order
    const addItem = async () => {
        const newItem = {
            name: 'Pizza',
            price: 10,
            quantity: 1,
        };

        try {
            await axios.post('http://localhost:3000/add-item', newItem);
            fetchOrderSummary(); // Refresh order summary
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    // Apply discount
    const applyDiscount = async () => {
        const discount = 5; // Example discount value

        try {
            await axios.post('http://localhost:3000/apply-discount', { discount });
            fetchOrderSummary(); // Refresh order summary
        } catch (error) {
            console.error('Error applying discount:', error);
        }
    };

    // Reset order
    const resetOrder = async () => {
        try {
            await axios.post('http://localhost:3000/reset-order');
            fetchOrderSummary(); // Refresh order summary
        } catch (error) {
            console.error('Error resetting order:', error);
        }
    };

    return (
        <div>
            <h2>Order Summary</h2>
            <ul>
                {orderSummary.items.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price} x {item.quantity} = ${item.itemTotal.toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Subtotal: ${orderSummary.subtotal.toFixed(2)}</p>
            <p>Discount: ${orderSummary.discount.toFixed(2)}</p>
            <p>Total: ${orderSummary.total.toFixed(2)}</p>

            <button onClick={addItem}>Add Item</button>
            <button onClick={applyDiscount}>Apply 5 Discount</button>
            <button onClick={resetOrder}>Reset Order</button>
        </div>
    );
};

export default OrderSummaryComponent;