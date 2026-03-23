import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Spinner, Alert, Row, Col, Card } from "react-bootstrap";

function BlogDetail() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= SINGLE BLOG =================
  useEffect(() => {
    setBlog(null);        // 🔥 reset blog
    setLoading(true);
    setError("");

    axios
      .get(`http://localhost:5001/api/blogs/${slug}`)
      .then((res) => setBlog(res.data))
      .catch(() => setError("Blog not found"))
      .finally(() => setLoading(false));

    window.scrollTo(0, 0); // 🔥 scroll to top
  }, [slug]);

  // ================= ALL BLOGS =================
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/blogs")
      .then((res) => setAllBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ================= LOADING =================
  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p>Loading...</p>
      </Container>
    );
  }

  // ================= ERROR =================
  if (error) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  // ================= SAFETY CHECK =================
  if (!blog) return null;

  return (
    <Container fluid className="mt-4">
      {/* ================= MAIN BLOG ================= */}
      <img
        src={`http://localhost:5001/uploads/${blog.image}`}
        alt={blog.title}
        onError={(e) => (e.target.src = "/no-image.png")}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h1 className="mt-3">{blog.title}</h1>
      <hr />
      <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
        {blog.content}
      </p>

      {/* ================= OTHER BLOGS ================= */}
      <hr />
      <h3 className="mb-4">Other Blogs</h3>

      <Row>
        {allBlogs
          .filter((b) => b.slug !== slug)
          .map((b) => (
            <Col md={4} sm={6} xs={12} key={b._id} className="mb-4">
              <Card style={{ height: "100%" }}>
                <Card.Img
                  variant="top"
                  src={`http://localhost:5001/uploads/${b.image}`}
                  onError={(e) => (e.target.src = "/no-image.png")}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title>{b.title}</Card.Title>
                  <Card.Text>
                    {b.content.substring(0, 80)}...
                  </Card.Text>

          
                  <Link
                    to={`/blogs/${b.slug}`}
                    className="btn btn-primary"
                  >
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default BlogDetail;
