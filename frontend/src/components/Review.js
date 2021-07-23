import React from "react";

function Review({ rev }) {
  return (
    <div className="review">
      <h3 className="reviewTitle">{rev.title}</h3>
      <p className="reviewContent">{rev.content}</p>
    </div>
  );
}

export default Review;
