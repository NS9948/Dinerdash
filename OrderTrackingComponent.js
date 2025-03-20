// OrderTrackingComponent.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const OrderTrackingComponent = ({ orderId }) => {
    const [orderStatus, setOrderStatus] = useState('Cooking');

    useEffect(() => {
        socket.on('orderStatusUpdated', (data) => {
            if (data.orderId === orderId) {
                setOrderStatus(data.status);
            }
        });

        return () => {
            socket.disconnect();
        };
    }, [orderId]);

    return (
        <div>
            <h2>Order Status</h2>
            <p>{orderStatus}</p>
        </div>
    );
};

export default OrderTrackingComponent;