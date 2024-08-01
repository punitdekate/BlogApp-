import React, { useEffect, useReducer, useRef, useState } from "react";
import styles from "./InputForm.module.css";
function Row({ labelName, children }) {
  return (
    <div className={styles.row}>
      <label>{labelName}</label>
      {children}
    </div>
  );
}

function blogListReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "ADD":
      return [action.blog, ...state];
    case "REMOVE":
      return state.filter((val, i) => i !== action.index);
    default:
      return [];
  }
}

function InputForm() {
  const [blog, setBlog] = useState({ title: "", description: "", date: "" });
  const [blogList, dispatch] = useReducer(blogListReducer, []);
  // const [blogList, setBlogList] = useState([]);
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);
  useEffect(() => {
    if (blogList.length > 0) {
      document.title = blogList[0].title;
    } else {
      document.title = "No Blog";
    }
  }, [blogList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blog);
    if (!blog.title || !blog.description) {
      alert("title and description is required");
      return;
    }
    // setBlog({
    //   title: blog.title,
    //   description: blog.description,
    //   date: new Date().toISOString(),
    // });
    // setBlogList((prevBlogs) => [blog, ...prevBlogs]);
    dispatch({
      type: "ADD",
      blog: {
        title: blog.title,
        description: blog.description,
        date: new Date().toISOString(),
      },
    });
    setBlog({
      title: "",
      description: "",
      date: "",
    });
    titleRef.current.focus();
  };

  function handleRemoveBlog(index) {
    // setBlogList(blogList.filter((val, i) => i !== index));
    dispatch({
      type: "REMOVE",
      index: index,
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h1>Share your Blog</h1>
          <div>
            <Row labelName="Title">
              <input
                value={blog.title}
                onChange={(e) =>
                  setBlog({
                    title: e.target.value,
                    description: blog.description,
                  })
                }
                className={styles.input}
                placeholder="Write title here..."
                ref={titleRef}
                required
              />
            </Row>
          </div>
          <div>
            <Row labelName="Description">
              <textarea
                className={styles.textArea}
                value={blog.description}
                onChange={(e) =>
                  setBlog({ title: blog.title, description: e.target.value })
                }
                placeholder="Write description here..."
                required
              />
            </Row>
          </div>
          <div>
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <hr></hr>
      <div>
        {blogList.map((blogItem, index) => (
          <div>
            <h2>{blogItem.title}</h2>
            <p>{blogItem.description}</p>
            <p>{blogItem.date}</p>
            <button onClick={() => handleRemoveBlog(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export { InputForm };
