import React from 'react';

const RatingStars = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const decimalStar = rating - filledStars;

  const renderStars = () => {
    const stars = [];


    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <svg key={`filled-star-${i}`} xmlns="http://www.w3.org/2000/svg" width='20' height='39' viewBox="0 0 24 24" fill='#FF9494'>
          <path d="M12 1.88l2.55 7.82h8.27l-6.69 4.87 2.55 7.82L12 17.37l-6.69 4.87 2.55-7.82L1.18 9.7h8.27z" />
        </svg>
      );
    }


    if (decimalStar > 0) {
      stars.push(
        <svg key="decimal-star" xmlns="http://www.w3.org/2000/svg" width='20' height='39' viewBox="0 0 24 24">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset={`${decimalStar * 100}%`} stopColor='#FF9494'/>
              <stop offset={`${decimalStar * 100}%`} stopColor="gray" />
            </linearGradient>
          </defs>
          <path d="M12 1.88l2.55 7.82h8.27l-6.69 4.87 2.55 7.82L12 17.37l-6.69 4.87 2.55-7.82L1.18 9.7h8.27" fill="url(#grad)" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="stars" title="평점" style={{ position: 'relative', top: '-45%', left:'53%' }}>
      {renderStars()}
    </div>
  );
};

export default RatingStars;
