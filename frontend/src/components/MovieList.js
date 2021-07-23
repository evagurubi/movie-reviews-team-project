import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";

function MovieList() {
  const [data, setData] = useState(undefined);

  const fetchData = async () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=57cbfa5ccc0ed1de4877b2f8f5a36d30"
    )
      .then((res) => {
        if (res.status !== 200) return "It is still loading";

        return res.json();
      })
      .then((json) => {
        setData(json);
        console.log(json);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cardCont">
      {data !== undefined
        ? data.results.map((item) => <Movie item={item} key={item.id} />)
        : "Loading"}
    </div>
  );
}

export default MovieList;
