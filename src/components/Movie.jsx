import React from "react";
import "./Movie.scss";
import { Link } from "react-router-dom";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { loadScript } from "../utils";

const Movie = ({ movie, openPostReviewForm }) => {
  const openPostReviewFormHandler = () => {
    openPostReviewForm();
  };

  // const openBuyorRentFormHandler = () => {
  //   // openBuyRentForm();
  //   console.log("object");
  // };

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("https://movies-backend-heroku.herokuapp.com/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data, "data");
    const __DEV__ = document.domain === "localhost";
    const options = {
      key: __DEV__ ? "rzp_test_crVX0LmGZAdl59" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Flick-O-Meter",
      description: "Buy or Rent movie, Enjoy!",
      image: "https://movies-backend-heroku.herokuapp.com/logo.svg",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        email: "test.test@gmail.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="movieBox">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
        alt={movie?.title}
      />
      <div className="movieDetails">
        <div className="movieTitle">{movie?.title}</div>
        <div className="movieVote">
          {movie?.vote_average}
          <i class="fa fa-star"></i>
        </div>

        {/* <span>
          <i className="fas fa-star"></i>
        </span> */}
      </div>
      <div className="movieOverview">
        <div>{movie?.overview}</div>
        <Link to="/post-review">
          <button
            className="postReviewBtn"
            type="button"
            onClick={openPostReviewFormHandler}
          >
            Post Review
          </button>
        </Link>
        {/* <Link to="/post-review"> */}
          <button
            className="postReviewBtn"
            type="button"
            onClick={displayRazorpay}
          >
            Buy/Rent
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Movie;
