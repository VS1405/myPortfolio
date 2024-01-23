import { Col, Row, Container, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import calculator from '../assets/img/calculator.png'
import medicalApp from '../assets/img/medical.png'
import restaurantApp from '../assets/img/restaurant.png';

import colorSharp2 from '../assets/img/color-sharp2.png'

export const Projects = () => {
  const projects = [
    {
      title: "Calculator App",
      imgUrl: calculator,
      desc: "Created calculator using React.JS",
      link: `https://calculator-tau-eosin.vercel.app/`
    },
    {
      title: "Medicine App",
      imgUrl: medicalApp,
      desc: "Created using skills like React.js, JS, Redux, HTML",
      link: `https://medicine-website.vercel.app/`
    },
    {
      title: "Restaurant App",
      imgUrl: restaurantApp,
      desc: "Created using skills like React.js, CSS, JS, Redux,Bootstrap",
      link: `https://restaurant-app-ashy.vercel.app/`
    }
  ];
  return (
    <section id="projects">
      <Container className="project">
        <Row>
          <Col>
            <h2>Projects</h2>
            {/* <p>Projects Created by mySelf</p> */}
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, i) => {
                      return <ProjectCard key={i} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Empty</Tab.Pane>
                <Tab.Pane eventKey="third">Empty</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
