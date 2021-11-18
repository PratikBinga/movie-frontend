import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import "./PostReview.scss";

const PostReview = () => {
  const newItemSchema = yup.object({
    title: yup.string().required(),
    rating: yup.number().required().min(1).max(10),
    // adult: yup.string().required(),
    genre: yup.string().required(),
    language: yup.string().required(),
    comments: yup.string().required(),
  });

  return (
    <Formik
      initialValues={{
        title: "",
        rating: "",
        adult: "",
        genre: "",
        language: "",
        comments: "",
      }}
      validationSchema={newItemSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values, "formValues----");

        alert(JSON.stringify(values));
        resetForm();
      }}
    >
      {(fp) => (
        <Form className="postFormContainer">
          <div className="inputBoxPostReviewContainer">
            <div className="labelPostReview">Name</div>
            <div className="inputTextPostReview">
              <input
                type="Title"
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
            <div className="labelPostReview">Language</div>
            <div className="inputTextPostReview">
              <input
                type="text"
                value={fp.values.language}
                onChange={fp.handleChange("language")}
                onBlur={fp.handleBlur("language")}
              />
              <span className="validationError">
                {fp.touched.language && fp.errors?.language}
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
