
import React, { useState } from "react";

function Post() {
  const [postType, setPostType] = useState("Article");
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  function handlePost(event) {
    event.preventDefault();
    if (title.trim().length < 5) {
      alert("Please enter a title with at least 5 characters.");
      return;
    }
    if (abstract.trim() === "") {
      alert("Please enter an abstract or question description.");
      return;
    }
    if (content.trim() === "") {
      alert(
        postType === "Article"
          ? "Please enter your article text."
          : "Please enter your question details."
      );
      return;
    }
    if (tags.trim() === "") {
      alert("Please enter at least one tag.");
      return;
    }
    const tagList = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
    if (tagList.length > 3) {
      alert("Please enter no more than 3 tags.");
      return;
    }
    alert("Your " + postType.toLowerCase() + " has been sent!");
    setTitle("");
    setAbstract("");
    setContent("");
    setTags("");
  }
  function changePostType(event) {
    setPostType(event.target.value);
    setTitle("");
    setAbstract("");
    setContent("");
    setTags("");
  }
  return (
    <div className="new-post-page">
      <div className="top-post-button">
        <button type="button" onClick={handlePost}>
          Post
        </button>
      </div>
      <h3 className="section-heading">New Post</h3>
      <div className="post-type">
        <span>Select Post Type:</span>
        <label>
          <input
            type="radio"
            name="postType"
            value="Question"
            checked={postType === "Question"}
            onChange={changePostType}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            name="postType"
            value="Article"
            checked={postType === "Article"}
            onChange={changePostType}
          />
          Article
        </label>
      </div>
      <form onSubmit={handlePost}>
        <h3 className="section-heading">
          What do you want to ask or share
        </h3>
        <p className="post-information">
          This section is designed based on the type of the post.
          It could be developed by conditional rendering.
          <span>
            {" "}
            For post {postType.toLowerCase()}, the following
            section would be appeared.
          </span>
        </p>
        <div className="post-field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter a descriptive title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={150}
            required
          />
        </div>
        <div className="post-field">
          <label htmlFor="abstract">
            {postType === "Article" ? "Abstract" : "Question Description"}
          </label>
          <textarea
            id="abstract"
            className="abstract-input"
            placeholder={
              postType === "Article"
                ? "Enter a 1-paragraph abstract"
                : "Briefly describe your question"
            }
            value={abstract}
            onChange={(event) => setAbstract(event.target.value)}
            maxLength={1000}
            required
          />
        </div>
        <div className="post-field">
          <label htmlFor="content">
            {postType === "Article" ? "Article Text" : "Question Details"}
          </label>
          <textarea
            id="content"
            className="content-input"
            placeholder={
              postType === "Article"
                ? "Enter your article text"
                : "Explain your question in detail"
            }
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          />
        </div>
        <div className="tags-field">
          <label htmlFor="tags">Tags</label>
          <input
            id="tags"
            type="text"
            placeholder={
              "Please add up to 3 tags to describe what your " +
              postType.toLowerCase() +
              " is about e.g., Java"
            }
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            required
          />
        </div>
        <div className="bottom-post-button">
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}
export default Post;
