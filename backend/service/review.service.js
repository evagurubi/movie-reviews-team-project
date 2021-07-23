const Review = require("../models/review.model");

exports.createReview = async (reviewBody) => {
  const review = new Review(reviewBody);

  return review.save();
};

exports.list = (movie, reviewer) => {
  // return await Review.find();

  return new Promise((resolve, reject) => {
    if (movie && reviewer) {
      Review.find({
        title: { $regex: movie, $options: "i" },
        reviewer_name: { $regex: reviewer, $options: "i" },
      }).exec(function (err, reviews) {
        if (err) {
          reject(err);
        } else {
          resolve(reviews);
          // console.log(reviews);
        }
      });
    }
    if (movie) {
      Review.find({ title: { $regex: movie, $options: "i" } }).exec(function (
        err,
        reviews
      ) {
        if (err) {
          reject(err);
        } else {
          resolve(reviews);
          // console.log(reviews);
        }
      });
    }
    if (reviewer) {
      Review.find({ reviewer_name: { $regex: reviewer, $options: "i" } }).exec(
        function (err, reviews) {
          if (err) {
            reject(err);
          } else {
            resolve(reviews);
            // console.log(reviews);
          }
        }
      );
    } else
      Review.find().exec(function (err, reviews) {
        if (err) {
          reject(err);
        } else {
          resolve(reviews);
          //  console.log(appointments);
        }
      });
  });
};
