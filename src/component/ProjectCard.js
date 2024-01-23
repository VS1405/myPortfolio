import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, desc, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl } alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{desc}</span>
          <br />
          <a href={link}>Click on Link</a>
        </div>
      </div>
    </Col>
  );
};
