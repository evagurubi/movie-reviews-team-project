const Review = require("../models/review.model");

exports.createReview = async (reviewBody) => {
  const review = new Review(reviewBody);

  return review.save();
};

exports.list = async () => {
  return await Review.find();
};
