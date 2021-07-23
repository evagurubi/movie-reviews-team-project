import React from "react";

function Review({ rev }) {
  return (
    <div>
      <p className="reviewTitle">{rev.title}</p>
      <p className="reviewContent">{rev.content}</p>
    </div>
  );
}

export default Review;
