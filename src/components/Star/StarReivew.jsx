import React, { useEffect } from "react";
import { useState } from "react";

const StarReivew = () => {
  const [starCount, setStarcount] = useState(0);
  const starColor = starCount * 20 + "%";
  console.log(starCount);
  return (
    <div>
      <span className="star">
        ★★★★★
        <span>★★★★★</span>
        <input
          type="range"
          onMouseUp={(e) => setStarcount(e.target.value)}
          onTouchEnd={(e) => setStarcount(e.target.value)}
          step="0.5"
          min="0"
          max="5"
        />
      </span>
      <style jsx>{`
        .star {
          position: relative;
          font-size: 2rem;
          color: #ddd;
        }
        .star input {
          width: 100%;
          height: 100%;
          position: absolute;
          top:-120%;
          left: -8%;
          opacity: 0;
          cursor: pointer;
        }
        .star span {
          width: ${starColor};
          position: absolute;
          left: 0;
          color: red;
          overflow: hidden;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default StarReivew;