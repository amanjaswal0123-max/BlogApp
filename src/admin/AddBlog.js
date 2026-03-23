import { useState } from "react";
import axios from "axios";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); 

  const submitBlog = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image); 


    try {
      await axios.post("http://localhost:5001/api/blogs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Blog Added Successfully");
      setTitle("");
      setContent("");
      setImage(null);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div style={{
      width: "500px",
      margin: "50px auto",
      padding: "30px",
      borderRadius: "15px",
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#007bff" }}>Add New Blog</h2>

      <form onSubmit={submitBlog} style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
          style={{
            marginBottom: "15px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          style={{
            marginBottom: "15px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
          style={{
            marginBottom: "15px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            minHeight: "120px",
            resize: "vertical"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Add Blog
        </button>
      </form>
    </div>


  );
}

export default AddBlog;
