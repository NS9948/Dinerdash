// ReservationComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const ReservationComponent = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [mealType, setMealType] = useState('');

    const reserveTable = () => {
        axios.post('http://localhost:3000/reserve-table', { name, date, time, mealType })
            .then(response => {
                if (response.data.success) {
                    alert('Table reserved successfully!');
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
                <option value="">Select Meal Type</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
            </select>
            <button onClick={reserveTable}>Reserve Table</button>
        </div>
    );
};

export default ReservationComponent;