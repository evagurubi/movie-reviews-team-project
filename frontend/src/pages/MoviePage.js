import React from "react";
import Logout from "../components/Logout";
import Movies from "../components/Movies";
import MovieList from "../components/MovieList";
import ReviewList from "../components/ReviewList";

function MoviePage() {
  return (
    <div>
      <Movies />
      <Logout />
      <MovieList />
      <ReviewList />
    </div>
  );
}

export default MoviePage;
