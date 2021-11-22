import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import "./PostReview.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

const PostReview = () => {
  const navigate = useNavigate();

  const newItemSchema = yup.object({
    creator: yup.string().required(),
    rating: yup.number().required().min(1).max(10),
    // adult: yup.string().required(),
    genre: yup.string().required(),
    title: yup.string().required(),
    comments: yup.string().required(),
  });

  return (
    <Formik
      initialValues={{
        creator: "",
        rating: "",
        adult: "",
        genre: "",
        title: "",
        comments: "",
      }}
      validationSchema={newItemSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values, "formValues----");
        // submitReviewPost(values);
        fetch(`https://movies-backend2-heroku.herokuapp.com/posts`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            if (data._id !== undefined) {
              toast.success("Successfully Posted");
              resetForm();
              setTimeout(() => {
                navigate("/");
              }, 1500);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            toast("Successfully Posted");
          });

        // alert(JSON.stringify(values));
      }}
    >
      {(fp) => (
        <Form className="postFormContainer">
          <div className="inputBoxPostReviewContainer">
            <ToastContainer />
            <div className="labelPostReview">Creator</div>
            <div className="inputTextPostReview">
              <input
                type="Title"
                value={fp.values.creator}
                onChange={fp.handleChange("creator")}
                onBlur={fp.handleBlur("creator")}
              />
              <span className="validationError">
                {fp.touched.creator && fp.errors?.creator}
              </span>
            </div>
          </div>
          <div className="inputBoxPostReviewContainer">
            <div className="labelPostReview">Rating</div>
            <div className="inputTextPostReview">
              <input
                type="number"
                value={fp.values.rating}
                onChange={fp.handleChange("rating")}
                onBlur={fp.handleBlur("rating")}
              />
              <span className="validationError">
                {fp.touched.rating && fp.errors?.rating}
              </span>
            </div>
          </div>
          <div className="inputBoxPostReviewContainer">
            <div className="labelPostReview">Adult</div>
            <div className="inputTextPostReviewCheckBox">
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={fp.handleChange("adult")}
                onBlur={fp.handleBlur("adult")}
                value={fp.values.adult}
              />
              <span className="validationError">
                {fp.touched.adult && fp.errors?.adult}
              </span>
            </div>
          </div>
          <div className="inputBoxPostReviewContainer">
            <div className="labelPostReview">Genre</div>
            <div className="inputTextPostReview">
              <select
                onChange={fp.handleChange("genre")}
                onBlur={fp.handleBlur("genre")}
                value={fp.values.genre}
              >
                <option value="select">Select</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="classic">Classic</option>
                <option value="horror">Horror</option>
                <option value="thriller">Thriller</option>
                <option value="adventurous">Adventurous</option>
                <option value="sci-fi">Sci-Fi</option>
              </select>
              <span className="validationError">
                {fp.touched.genre && fp.errors?.genre}
              </span>
            </div>
          </div>
          <div className="inputBoxPostReviewContainer">
            <div className="labelPostReview">Movie Name</div>
            <div className="inputTextPostReview">
              <input
                type="text"
                value={fp.values.title}
                onChange={fp.handleChange("title")}
                onBlur={fp.handleBlur("title")}
              />
              <span className="validationError">
                {fp.touched.title && fp.errors?.title}
              </span>
            </div>
          </div>

          <div className="inputBoxPostReviewContainer">
            <div className="labelPostReview">Comments</div>
            <div className="inputTextPostReview">
              <textarea
                rows="5"
                cols="40"
                value={fp.values.comments}
                onChange={fp.handleChange("comments")}
                onBlur={fp.handleBlur("comments")}
              />
              <span className="validationError">
                {fp.touched.comments && fp.errors?.comments}
              </span>
            </div>
          </div>
          <button className="postReviewSubmitBtn" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PostReview;
