const Review = require("../service/review.service");

exports.insert = (req, res) => {
  Review.createReview(req.body).then((result) =>
    res.status(201).send({ id: result._id })
  );
};

exports.list = (req, res) => {
  Review.list().then((result) => res.status(200).send(result));
};
