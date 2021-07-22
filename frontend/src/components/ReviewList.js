import React from "react";
import { useState, useEffect } from "react";
import Review from "./Review";

function ReviewList() {
  const [reviewData, setReviewData] = useState(undefined);
  const [placeholder, setPlaceholder] = useState(true);
  const [showAll, setShowAll] = useState(true);


  const fetchReviews = async () => {
    setShowAll(true);
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

  const searchHandler = (e) => {
    setShowAll(false);
  }

  return (
    <div>
      <button onClick={fetchReviews}>All Reviews</button>

      {reviewData !== undefined && showAll
        && reviewData.map((rev, i) => <Review rev={rev} key={i} />)}

      <button onClick={() => setPlaceholder(!placeholder)}>Search by</button>
      


      <input placeholder={ placeholder
          ? "movie"
          : "reviewer"} onChange={searchHandler}></input>
    </div>
  );
}

export default ReviewList;
