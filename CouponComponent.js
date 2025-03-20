// CouponComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const CouponComponent = () => {
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [finalAmount, setFinalAmount] = useState(100); // Example total amount

    const applyCoupon = () => {
        axios.post('http://localhost:3000/apply-coupon', { couponCode, totalAmount: finalAmount + discount })
            .then(response => {
                setDiscount(response.data.discount);
                setFinalAmount(response.data.finalAmount);
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
            />
            <button onClick={applyCoupon}>Apply Coupon</button>
            <p>Discount: ${discount.toFixed(2)}</p>
            <p>Final Amount: ${finalAmount.toFixed(2)}</p>
        </div>
    );
};

export default CouponComponent;