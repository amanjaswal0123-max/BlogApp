import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import truck from "../images/truckss.jpg";


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <>
      <img
        src={truck}
        alt="banner"
        className="img-fluid w-100"
        style={{ height: "350px", objectFit: "cover" }}
      />


      {/* BLOG SECTION */}
      <Container className="my-5">
        <Row className="g-4">
          {blogs.map((blog) => (
            <Col xs={12} md={4} key={blog._id}>
              <Card
  className="h-100 shadow-sm"
  style={{
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "blue",
    borderTopLeftRadius: "44px",
    borderBottomRightRadius: "44px",
    overflow: "hidden",
  }}
>

                <Card.Img
                  variant="top"
                  src={`http://localhost:5001/uploads/${blog.image}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <Card.Body className="d-flex flex-column">
                  <Card.Title>{blog.title}</Card.Title>

<Card.Text>
  {blog.content.length > 200
    ? blog.content.substring(0, 200) 
    : blog.content}
</Card.Text>


                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="mt-auto text-decoration-none fw-bold text-primary text-end "
                   >
                    Read More →
                  </Link>
                
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
