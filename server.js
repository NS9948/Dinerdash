// server.js
//Dynamic Pricing 
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const menuItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'Pasta', price: 8 }
];

app.get('/menu', (req, res) => {
    const currentHour = new Date().getHours();
    const isHappyHour = currentHour >= 14 && currentHour < 17; // 2 PM to 5 PM

    const discountedMenu = menuItems.map(item => ({
        ...item,
        price: isHappyHour ? item.price * 0.8 : item.price // 20% discount
    }));

    res.json(discountedMenu);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

//Discounts/Coupons
// server.js
app.post('/apply-coupon', (req, res) => {
    const { couponCode, totalAmount } = req.body;
    let discount = 0;

    if (couponCode === 'DISCOUNT10') {
        discount = totalAmount * 0.1; // 10% discount
    }

    res.json({ discount, finalAmount: totalAmount - discount });
});
//Loyalty Programme
let loyaltyPoints = 0;

app.post('/earn-points', (req, res) => {
    const { amountSpent } = req.body;
    loyaltyPoints += Math.floor(amountSpent / 10); // 1 point for every $10 spent
    res.json({ loyaltyPoints });
});

app.post('/redeem-points', (req, res) => {
    const { points } = req.body;
    if (points > loyaltyPoints) {
        res.status(400).json({ error: 'Not enough points' });
    } else {
        loyaltyPoints -= points;
        res.json({ loyaltyPoints, discount: points * 0.1 }); // $0.10 discount per point
    }
});
// Backend: Redeem Points API
app.post('/redeem-points', (req, res) => {
    const { points } = req.body;

    if (points > loyaltyPoints) {
        return res.status(400).json({ error: 'Not enough points to redeem.' });
    }

    // Calculate discount (e.g., $0.10 per point)
    const discount = points * 0.1;
    loyaltyPoints -= points;

    res.json({ success: true, discount, loyaltyPoints });
});
//

//Real-Time Order Tracking
// server.js
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('updateOrderStatus', (orderId, status) => {
        io.emit('orderStatusUpdated', { orderId, status });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
// Interactive Table Management

let reservations = [];

app.post('/reserve-table', (req, res) => {
    const { name, date, time, mealType } = req.body;
    reservations.push({ name, date, time, mealType });
    res.json({ success: true });
});

app.get('/waitlist', (req, res) => {
    res.json({ waitTime: 15 }); // Example wait time
});

// Customer Feedback & Reviews
// server.js
let reviews = [];

app.post('/submit-review', (req, res) => {
    const { rating, comment } = req.body;
    reviews.push({ rating, comment });
    res.json({ success: true });
});

app.get('/reviews', (req, res) => {
    res.json(reviews);
});

//order summary
// server.js
let orderSummary = {
    items: [],
    subtotal: 0,
    discount: 0,
    total: 0,
};

// Add item to order
app.post('/add-item', (req, res) => {
    const { name, price, quantity } = req.body;
    const itemTotal = price * quantity;

    orderSummary.items.push({ name, price, quantity, itemTotal });
    orderSummary.subtotal += itemTotal;
    orderSummary.total = orderSummary.subtotal - orderSummary.discount;

    res.json(orderSummary);
});

// Apply discount
app.post('/apply-discount', (req, res) => {
    const { discount } = req.body;
    orderSummary.discount = discount;
    orderSummary.total = orderSummary.subtotal - orderSummary.discount;

    res.json(orderSummary);
});

// Get current order summary
app.get('/order-summary', (req, res) => {
    res.json(orderSummary);
});

// Reset order summary
app.post('/reset-order', (req, res) => {
    orderSummary = {
        items: [],
        subtotal: 0,
        discount: 0,
        total: 0,
    };
    res.json(orderSummary);
});


//order custoization API
// Order Customization
app.post('/customize-order', (req, res) => {
    const { itemId, modifications } = req.body;

    // Example: Find the item in the menu and apply modifications
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }

    // Apply modifications (e.g., extra cheese, remove onions)
    const customizedItem = {
        ...item,
        modifications,
    };

    res.json({ success: true, customizedItem });
});