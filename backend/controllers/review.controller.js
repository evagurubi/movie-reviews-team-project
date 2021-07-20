const Review = require("../service/review.service");

exports.insert = (req, res) => {
  Review.createReview(req.body).then((result) =>
    res.status(201).send({ id: result._id })
  );
};
