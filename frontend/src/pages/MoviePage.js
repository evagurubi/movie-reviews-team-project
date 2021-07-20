import React from "react";
import Logout from "../components/Logout";
import Movies from "../components/Movies";
import MovieList from "../components/MovieList";

function MoviePage() {
  return (
    <div>
      <Movies />
      <Logout />
      <MovieList />
    </div>
  );
}

export default MoviePage;
