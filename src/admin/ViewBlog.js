import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ViewBlog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();


  const getBlogs = async () => {
    const res = await axios.get("http://localhost:5001/api/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    getBlogs();
  }, []);


  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    await axios.delete(`http://localhost:5001/api/blogs/${id}`);
    getBlogs();
  };

  return (
<>
  
    <Container className="mt-5">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog._id}>
          
          {/* LEFT IMAGE */}
          <div className="blog-img">
            <img
              src={`http://localhost:5001/uploads/${blog.image}`}
              alt=""
            />
          </div>

          {/* CONTENT */}
          <div className="blog-content">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="blog-actions">
            <button onClick={() => navigate(`/admin/edit-blog/${blog._id}`)}>
  Edit
</button>


            <button className="delete" onClick={() => deleteBlog(blog._id)}>
               Delete
            </button>

            
            <button
  className="view"
  onClick={() => navigate(`/blogs/${blog.slug}`)}
>
  Read More
</button>




          </div>
        </div>
      ))}
    </Container>
    </>
  );
}

export default ViewBlog;
