import React, { useState, useEffect } from "react";
import { Rating, Typography } from "@mui/material";

const StarRating = (prop) => {
  const { title, formData, fieldName, setFormData } = prop;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFormData({ ...formData, [fieldName]: newValue });
  };

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
