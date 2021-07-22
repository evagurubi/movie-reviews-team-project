import React from "react";
import { useState, useEffect } from "react";
import Review from "./Review";

function ReviewList() {
  const [reviewData, setReviewData] = useState(undefined);
  const fetchReviews = async () => {
    fetch("/api/review")
      .then((res) => {
        if (res.status !== 200) return "It is still loading";

        return res.json();
      })
      .then((json) => {
        setReviewData(json);
        console.log(json);
      });
  };

  return (
    <div>
      <button onClick={fetchReviews}>Search Reviews</button>

      {reviewData !== undefined
        ? reviewData.map((rev, i) => <Review rev={rev} key={i} />)
        : "Loading"}
    </div>
  );
}

export default ReviewList;
