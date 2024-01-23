import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import javascript from "../assets/tech/javascript.png";
import cssLogo from "../assets/tech/css.png";
import htmlLogo from "../assets/tech/html.png";
import reduxLogo from "../assets/tech/redux.png";
import reactLogo from "../assets/tech/reactjs.png";
import mongodbLogo from "../assets/tech/mongodb.png";
import githubLogo from "../assets/github.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        {/* <p><br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <img  src={javascript} alt="JavaScript Logo"/> 
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                            <img src={htmlLogo} alt="JavaScript Logo"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                            <img src={cssLogo} alt="JavaScript Logo"/>
                                <h5> CSS</h5>
                            </div>
                            <div className="item">
                            <img src={reactLogo} alt="JavaScript Logo"/>
                                <h5>React.JS</h5>
                            </div>
                            <div className="item">
                            <img src={reduxLogo} alt="JavaScript Logo"/> 
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                            <img src={mongodbLogo} alt="JavaScript Logo"/> 
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                            <img src={githubLogo} alt="JavaScript Logo"/> 
                                <h5>GitHub</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
