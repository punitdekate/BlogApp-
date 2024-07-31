import React, { useState } from "react";
import styles from "./InputForm.module.css";
function Row({ labelName, children }) {
  return (
    <div>
      <label className={styles.row}>{labelName}</label>
      {children}
    </div>
  );
}

function InputForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title and description is required");
      return;
    }
    const newBlog = {
      title,
      description,
      date: new Date().toISOString(),
    };
    props.handleAddBlog(newBlog);
    setTitle("");
    setDescription("");
  };
  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <h1>Share your Blog</h1>
        <div>
          <Row labelName="Title">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
              required
            />
          </Row>
        </div>
        <div>
          <Row labelName="Description">
            <textarea
              className={styles.textArea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Row>
        </div>
      </div>

      <button type="submit" className={styles.submitBtn} onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

function BlogsList(props) {
  console.log(props);
  return (
    <>
      <div className={styles.inputContainer}>
        {props.blogsList.map((blog, index) => (
          <Blog
            blog={blog}
            handleRemoveBlog={props.handleRemoveBlog}
            index={index}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

function Blog(props) {
  return (
    <div>
      <p>{props.blog.title}</p>
      <p>{props.blog.description}</p>
      <p>{props.blog.date}</p>
      <button onClick={() => props.handleRemoveBlog(props.index)}>
        Remove
      </button>
    </div>
  );
}

export { InputForm, BlogsList };
