import { Container, Row, Col } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="footer-contact-info">
            <h5>Contact Me</h5>
            <p>+91 9028304405</p>
            <p>varshamhaske808@gmail.com</p>
          </Col>
          <Col size={12} sm={6} className="text-start text-sm-end">
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon" style={{ paddingTop: 20 }}>
                <h5 style={{ textAlign: "start", font: "bold" }}>Follow Us</h5>
                <a
                  href="https://github.com/VS1405"
                  alt="gitHub"
                  className="icons"
                >
                  {/* <img src={navIcon1} alt="github" /> */}
                  <Github color="white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/varsha-mhaske-4b4b971ba/"
                  alt="LinkedIn"
                  className="icons"
                >
                  {/* <img src={navIcon1} alt="linkedIn" /> */}
                  <Linkedin color="white" />
                </a>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
