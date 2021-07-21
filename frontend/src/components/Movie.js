import { useState } from "react";
import jwt_decode from "jwt-decode";

function Movie({ item }) {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [review, setReview] = useState("");

  const decoded = jwt_decode(localStorage.getItem('myToken'));

  const sendData = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // username = username: username
      body: JSON.stringify({
        title: item.title,
        content: review,
        movie_id: item.id,
        reviewer: decoded.sub
      }),
    });
    const result = await response.json();
    console.log(result);
    
  }

  return (
    <div>
      <p>{item.title}</p>
      <p>{item.release_date}</p>
      <p>{item.overview}</p>
      <button onClick={() => setShowWriteReview(!showWriteReview)}>Leave Review</button>
      {showWriteReview && 
      <form onSubmit={sendData}>
        <input type="text" placeholder="Your review of the film" onChange={(e) => setReview(e.target.value)} />
        <input type="submit" value="SUBMIT"  />
      </form>}
    </div>
  );
}

export default Movie;
