import React from "react";

function Review({ rev }) {
  return (
    <div>
      <p>{rev.title}</p>
      <p>{rev.content}</p>
    </div>
  );
}

export default Review;
