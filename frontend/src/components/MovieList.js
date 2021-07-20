import React from "react";
import { useState, useEffect } from "react";

function MovieList() {
  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=57cbfa5ccc0ed1de4877b2f8f5a36d30"
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
}

export default MovieList;
