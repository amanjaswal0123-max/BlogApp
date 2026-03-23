import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  // GET SINGLE BLOG BY ID
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/blogs`)
      .then((res) => {
        const blog = res.data.find((b) => b._id === id);
        setTitle(blog.title);
        setContent(blog.content);
      })
      .catch((err) => console.error(err));
  }, [id]);

  // 🔹 UPDATE BLOG
  const updateBlog = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(
        `http://localhost:5001/api/blogs/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      

      alert("Blog Updated Successfully");
      navigate("/admin/viewblog");
    } catch (err) {
      console.error(err);
      alert("Update Failed");
    }
  };
  
  return (
    <div style={{
      width: "500px",
      margin: "50px auto",
      padding: "30px",
      borderRadius: "15px",
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#28a745" }}>
        Edit Blog To Change Your Code
      </h2>

      <form onSubmit={updateBlog} style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          style={{ marginBottom: "15px" }}
        />



        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ marginBottom: "15px", padding: "12px" }}
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ marginBottom: "15px", padding: "12px", minHeight: "120px" }}
        />


        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#28a745",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}

export default EditBlog;
