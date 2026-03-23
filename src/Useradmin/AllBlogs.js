import axios from "axios";
import { useEffect, useState } from "react";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const role = localStorage.getItem("role");
        const token = localStorage.getItem("token");

        if (!token || role !== "user") {
          return;
        }

        const res = await axios.get(
          "http://localhost:5001/api/blog/user/myblogs", 
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setBlogs(res.data);
      } catch (err) {
        alert(err.response?.data?.message || "Failed to fetch blogs");
        console.error(err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <h2>My Blogs</h2>

      {blogs.length === 0 && <p>No blogs found</p>}

      {blogs.map((blog) => (
        <div
          key={blog._id}
          style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
        >
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </>
  );
};

export default AllBlogs;