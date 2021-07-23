import { useState } from "react";
import jwt_decode from "jwt-decode";
import './Movie.css';

function Movie({ item }) {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [review, setReview] = useState("");

  const decoded = jwt_decode(localStorage.getItem("myToken"));
  // console.log(decoded);

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
        reviewer: decoded.google_id,
        reviewer_name: decoded.given_name,
        picture: decoded.user_pic,
      }),
    });
    const result = await response.json();
    console.log(result);
    setReview("")
  };

  return (
    <div className="card">
      <p className="title">{item.title}</p>
      <p className="date">{item.release_date}</p>
      <p className="overview">{item.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}></img>
      <button onClick={() => setShowWriteReview(!showWriteReview)}>
        Leave Review
      </button>
      {showWriteReview && (
        <form onSubmit={sendData}>
          <input
            type="text"
            placeholder="Your review of the film"
            onChange={(e) => setReview(e.target.value)}
            value={review}
          />
          <input type="submit" value="SUBMIT" />
        </form>
      )}
    </div>
  );
}

export default Movie;
