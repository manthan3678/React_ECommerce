import React, { useEffect, useState } from "react";

const Ratings = ({
  defaultRating = 1,
  isEditable,
  onRatingChange = () => {},
}) => {
  const [selectedRating, setSelectedRating] = useState(defaultRating);

  useEffect(() => {
    onRatingChange(selectedRating);
  }, [selectedRating]);
  //
  return (
    <>
      <div className={`rating ${!isEditable && "pointer-events-none"}`}>
        {[1, 2, 3, 4, 5].map((value, i) => {
          return (
            <>
              {value <= selectedRating ? (
                <input
                  key={i}
                  onClick={() => setSelectedRating(value)}
                  className="mask mask-star-2 bg-orange-400"
                />
              ) : (
                <input
                  key={i}
                  onClick={() => setSelectedRating(value)}
                  className="mask mask-star-2 bg-orange-400/2"
                />
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Ratings;
