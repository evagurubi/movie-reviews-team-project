import React from "react";

function Movie({ item }) {
  return (
    <div>
      <p>{item.title}</p>
      <p>{item.release_date}</p>
      <p>{item.overview}</p>
    </div>
  );
}

export default Movie;
