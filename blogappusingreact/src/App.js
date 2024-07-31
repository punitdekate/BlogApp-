import { useState } from "react";
import { InputForm, BlogsList } from "./components/inputForm";

function App() {
  const [blogsList, setBlogList] = useState([]);

  const handleAddBlog = (blog) => {
    setBlogList((prevBlogs) => {
      return [blog, ...prevBlogs];
    });
  };

  const handleRemoveBlog = (index) => {
    setBlogList((prevBlogs) => {
      const newBlogsList = [...prevBlogs]; // Create a new array
      newBlogsList.splice(index, 1); // Remove the item
      return newBlogsList; // Return the new array
    });
  };
  return (
    <>
      <InputForm handleAddBlog={handleAddBlog} />
      <BlogsList
        blogsList={blogsList ? blogsList : []}
        handleRemoveBlog={handleRemoveBlog}
      />
    </>
  );
}

export default App;
