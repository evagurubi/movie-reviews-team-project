import React from "react";
import { useState, useEffect } from "react";
import Review from "./Review";

function ReviewList() {
  const [reviewData, setReviewData] = useState(undefined);
  const [placeholder, setPlaceholder] = useState(true);
  // const [showAll, setShowAll] = useState(true);
  const [inputText, setSetInputText] = useState("");
  const [query, setQuery] = useState("");

  /* const fetchReviews = async () => {
    //setShowAll(true);
    fetch("/api/review")
      .then((res) => {
        if (res.status !== 200) return "It is still loading";

        return res.json();
      })
      .then((json) => {
        setReviewData(json);
        console.log(json);
      });
  };*/

  const searchHandler = (e) => {
    //setShowAll(false);

    setSetInputText(e.target.value);
    if (placeholder) {
      setQuery(`movie=${inputText}`);
    } else {
      setQuery(`reviewer=${inputText}`);
    }
    //if (inputText.length > 1) fetchReviewsWithQuery();
  };

  const fetchReviewsWithQuery = () => {
    //setShowAll(true);
    fetch(`/api/review?${query}`)
      .then((res) => {
        if (res.status !== 200) return "It is still loading";

        return res.json();
      })
      .then((json) => {
        setReviewData(json);
        console.log(json);
      });
  };

  useEffect(() => {
    fetchReviewsWithQuery();
  }, [inputText]);

  return (
    <div>
      <button onClick={() => setPlaceholder(!placeholder)}>Search by</button>

      <input
        placeholder={placeholder ? "movie" : "reviewer"}
        onInput={searchHandler}
        value={inputText}
      ></input>

      {reviewData !== undefined &&
        //showAll &&
        reviewData.map((rev, i) => <Review rev={rev} key={i} />)}
    </div>
  );
}

export default ReviewList;
