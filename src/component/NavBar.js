import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Github, Instagram, Linkedin } from "react-bootstrap-icons";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdatedActive = (v) => {
    setActiveLink(v);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* <Navbar.Brand href="/" style={{width: '100'}}>
          <img src={logos} alt="logo.png" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClik={() => {
                onUpdatedActive("home");
              }}
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClik={() => {
                onUpdatedActive("skills");
              }}
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClik={() => {
                onUpdatedActive("projects");
              }}
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/VS1405" target="_blank" alt="gitHub" className="icons">
                {/* <img src={navIcon1} alt="github" /> */}
                <Github color="white" />
              </a>
              <a href="https://www.linkedin.com/in/varsha-mhaske-4b4b971ba/" target="_blank" alt="LinkedIn" className="icons">
                {/* <img src={navIcon1} alt="linkedIn" /> */}
                <Linkedin color="white" />
                </a>
            </div>
            <button
              className="btn"
              onClick={() => {
                console.log("connect");
              }}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
