import StarRatings from "react-star-ratings";

import React from "react";

const Ratings = ({ ratings, ...restProps }) => (
  <StarRatings
    rating={ratings}
    starRatedColor="#FFC30B"
    numberOfStars={5}
    name="rating"
    starDimension="1em"
    starSpacing="0.2em"
    ignoreInlineStyles={false}
    
  />
);

export default Ratings;
