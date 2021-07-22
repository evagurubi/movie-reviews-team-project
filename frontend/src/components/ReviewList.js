import React from "react";
import { useState, useEffect } from "react";
import Review from "./Review";

function ReviewList() {
  const [reviewData, setReviewData] = useState(undefined);
<<<<<<< HEAD
=======
  const [placeholder, setPlaceholder] = useState(true);
  const [showAll, setShowAll] = useState(true);
  const [inputText, setSetInputText] = useState("");


>>>>>>> b73b085d6681fe887c9140899bf52a210f59d136
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
      


      <input 
        placeholder={ placeholder
          ? "movie"
          : "reviewer"} 
        onInput={searchHandler}
        value={inputText}
        onKeyPress={inputEnter}></input>
    </div>
  );
}

export default ReviewList;
