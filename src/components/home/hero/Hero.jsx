import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO prodigee"
              title="Get Tutored, Get Hired"
            />
            <p>
              Start learning in minute with top tech tutors, to get you
              certifird and hired today!
            </p>
            <div className="button">
              {/* <button className="primary-btn"> */}
              <button className="getStarted">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="viewCourse">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
