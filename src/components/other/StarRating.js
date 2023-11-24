import React, { useState } from "react";
import { Rating, Typography } from "@mui/material";

const StarRating = ({ title }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography component="legend">{title}</Typography>
      <Rating
        name="star-rating"
        value={value}
        size="large"
        onChange={handleChange}
        precision={0.5} // You can customize the precision to allow half-star ratings
      />
      {/* <Typography variant="caption">{value}</Typography> */}
    </div>
  );
};

export default StarRating;
