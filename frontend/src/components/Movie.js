import { useState } from "react";

function Movie({ item }) {
  const [showWriteReview, setShowWriteReview] = useState(false);

  return (
    <div>
      <p>{item.title}</p>
      <p>{item.release_date}</p>
      <p>{item.overview}</p>
      <button onClick={() => setShowWriteReview(!showWriteReview)}>Leave Review</button>
      {showWriteReview && 
      <form >
        <input type="text" placeholder="Your review of the film" />
        <input type="submit" value="SUBMIT"  />
      </form>}
    </div>
  );
}

export default Movie;
