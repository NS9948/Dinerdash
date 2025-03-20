// ReviewComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const ReviewComponent = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const submitReview = () => {
        axios.post('http://localhost:3000/submit-review', { rating, comment })
            .then(response => {
                if (response.data.success) {
                    alert('Review submitted successfully!');
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Leave a Review</h2>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="0">Select Rating</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Your comment"></textarea>
            <button onClick={submitReview}>Submit Review</button>
        </div>
    );
};

export default ReviewComponent;