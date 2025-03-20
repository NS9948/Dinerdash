// LoyaltyComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const LoyaltyComponent = () => {
    const [loyaltyPoints, setLoyaltyPoints] = useState(0);
    const [amountSpent, setAmountSpent] = useState(0);
    const [pointsToRedeem, setPointsToRedeem] = useState(0);

    const earnPoints = () => {
        axios.post('http://localhost:3000/earn-points', { amountSpent })
            .then(response => setLoyaltyPoints(response.data.loyaltyPoints))
            .catch(error => console.error(error));
    };

    const redeemPoints = () => {
        axios.post('http://localhost:3000/redeem-points', { points: pointsToRedeem })
            .then(response => {
                setLoyaltyPoints(response.data.loyaltyPoints);
                alert(`Discount: $${response.data.discount.toFixed(2)}`);
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <input
                type="number"
                value={amountSpent}
                onChange={(e) => setAmountSpent(e.target.value)}
                placeholder="Amount spent"
            />
            <button onClick={earnPoints}>Earn Points</button>
            <p>Loyalty Points: {loyaltyPoints}</p>
            <input
                type="number"
                value={pointsToRedeem}
                onChange={(e) => setPointsToRedeem(e.target.value)}
                placeholder="Points to redeem"
            />
            <button onClick={redeemPoints}>Redeem Points</button>
        </div>
    );
};

export default LoyaltyComponent;