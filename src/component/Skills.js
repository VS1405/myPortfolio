import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  JS,
  css,
  figma,
  nodejs,
  git,
  html,
  mongodb,
  reactjs,
  redux,
  tailwind,
  github,
  postman,
} from "../assets/tech";

const skillList = [
  { name: "Html", src: html },
  { name: "CSS", src: css },
  { name: "Tailwind", src: tailwind },
  { name: "JavaScript", src: JS },
  { name: "React.Js", src: reactjs },
  { name: "Node.JS", src: nodejs },
  { name: "Github", src: github },
  { name: "Git", src: git },
  { name: "mongoDB", src: mongodb },
  { name: "Redux", src: redux },
  { name: "Figma", src: figma },
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="grid">
                {skillList.map((value) => {
                  return (
                    <div className="item" key={Math.random()}>
                      <img src={value.src} alt={value.name} />
                      <h5>{value.name}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
