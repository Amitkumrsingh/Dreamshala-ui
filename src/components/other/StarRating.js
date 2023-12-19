import React, { useState, useEffect } from "react";
import { Rating, Typography } from "@mui/material";

const StarRating = ({ title, setRating }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setRating(value);
  }, [setRating, value]);

  return (
    <div>
      <Typography component="legend">{title}</Typography>
      <Rating
        name="star-rating"
        value={value}
        size="large"
        onChange={handleChange}
        precision={1} // You can customize the precision to allow half-star ratings
      />
      {/* <Typography variant="caption">{value}</Typography> */}
    </div>
  );
};

export default StarRating;
