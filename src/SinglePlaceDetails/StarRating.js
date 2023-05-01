import React from 'react';

const StarRating = ({ rating }) => {
    const ratingInteger = parseFloat(rating)
    const stars = [];
    for (let i = 1; i <= ratingInteger; i++) {
        const className = i <= ratingInteger ? <i class="ri-star-fill"></i> : <i class="ri-star-line"></i>;
        stars.push(
            <i key={i} className={`ri-star-fill ${className}`}></i>
        );
    }
    return (
        <div className="text-orange-400">
            {stars}
        </div>
    );
};

export default StarRating;