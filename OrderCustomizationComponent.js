import React, { useState } from 'react';
import axios from 'axios';

const OrderCustomizationComponent = () => {
    const [extraCheese, setExtraCheese] = useState(false);
    const [removeOnions, setRemoveOnions] = useState(false);
    const [spicySauce, setSpicySauce] = useState(false);
    const [orderSummary, setOrderSummary] = useState('');

    // Function to update the order summary
    const updateOrderSummary = () => {
        let summary = 'Your Order:\n';
        if (extraCheese) summary += '- Extra Cheese\n';
        if (removeOnions) summary += '- Remove Onions\n';
        if (spicySauce) summary += '- Spicy Sauce\n';
        setOrderSummary(summary);
    };

    // Function to handle placing the order
    const placeOrder = () => {
        if (!orderSummary) {
            alert('Please customize your order before placing it.');
            return;
        }

        // Simulate sending the order to the backend
        axios.post('http://localhost:3000/place-order', { orderSummary })
            .then(response => {
                alert('Order placed successfully!');
                console.log('Order Details:', response.data);
            })
            .catch(error => {
                console.error('Error placing order:', error);
                alert('Failed to place order. Please try again.');
            });
    };

    return (
        <div>
            <h2>Customize Your Order</h2>
            <label>
                <input
                    type="checkbox"
                    checked={extraCheese}
                    onChange={(e) => {
                        setExtraCheese(e.target.checked);
                        updateOrderSummary();
                    }}
                />
                Extra Cheese
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={removeOnions}
                    onChange={(e) => {
                        setRemoveOnions(e.target.checked);
                        updateOrderSummary();
                    }}
                />
                Remove Onions
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={spicySauce}
                    onChange={(e) => {
                        setSpicySauce(e.target.checked);
                        updateOrderSummary();
                    }}
                />
                Spicy Sauce
            </label>
            <br />

            {/* Order Summary Section */}
            <div>
                <h3>Order Summary</h3>
                <pre>{orderSummary || 'No customizations selected yet.'}</pre>
            </div>

            {/* Place Order Button */}
            <button onClick={placeOrder}>Place Order</button>
        </div>
    );
};

export default OrderCustomizationComponent;