import axios from "axios";
import { useState } from "react";

const UserAddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addBlog = async () => {
    try {
      const role = localStorage.getItem("role");
      const token = localStorage.getItem("token");

      if (!token || role !== "user") {
        alert("Unauthorized");
        return;
      }

      await axios.post(
        "http://localhost:5001/api/blog/user/add", 
        { title, content },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert("Blog Added");
      setTitle("");
      setContent("");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add blog");
      console.error(err);
    }
  };

  return (
    <>
      <h2>Add Blog</h2>

      <input
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        value={content}
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={addBlog}>Add Blog</button>
    </>
  );
};

export default UserAddBlog;