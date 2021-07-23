const Review = require("../service/review.service");

exports.insert = (req, res) => {
  Review.createReview(req.body).then((result) =>
    res.status(201).send("Request received")
  );
};

exports.list = (req, res) => {
  let movie = null;
  let reviewer = null;

  if (req.query) {
    if (req.query.movie) {
      movie = req.query.movie;
    }
    if (req.query.reviewer) {
      reviewer = req.query.reviewer;
    }
  }

  Review.list(movie, reviewer).then((result) => res.status(200).send(result));
};
