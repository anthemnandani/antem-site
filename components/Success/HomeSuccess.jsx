"use client";

import { useState, useEffect, useRef } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const HomeSuccess = ({ classOption }) => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  const baseUrl = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL
;

  return (
    <div
      className={`section section-padding-top success-section-padding-bottom-180 ${classOption}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="about-image-area right-0 skill-image-area">
              <div className="about-image js-tilt">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={`${baseUrl}/images/skill/skill-1.jpg`}
                    alt="Software Development Skill"
                    loading="lazy"
                  />
                </Tilt>
              </div>
              <div className="about-image js-tilt">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={`${baseUrl}/images/skill/skill-2.jpg`}
                    alt="Generative AI Skill"
                    loading="lazy"
                  />
                </Tilt>
              </div>
              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <img
                    src={`${baseUrl}/images/shape-animation/video-shape-1.png`}
                    alt="Video Shape Decoration"
                    loading="lazy"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="offset-lg-1 col-lg-5" data-aos="fade-up" data-aos-delay="300">
            <div className="success-content mt-lg-0 mt-md-50 mt-sm-50 mt-40">
              <SectionTitleTwo
                subTitle="Your success drives our success."
                title="Web Development, Generative AI, Data ETL, &amp; Presentation are our strengths"
              />

              <div className="progress-bar--one">
                {[
                  { label: "Software Development", value: 93, gradient: "gradient-1" },
                  { label: "Generative AI", value: 85, gradient: "gradient-2" },
                  { label: "Web Design", value: 93, gradient: "gradient-3" },
                  { label: "Database API Development", value: 93, gradient: "gradient-4" },
                  { label: "Mobile Applications", value: 80, gradient: "gradient-1" },
                  { label: "Data ETL & Dashboards", value: 90, gradient: "gradient-2" },
                ].map((skill, idx) => (
                  <div className="progress-charts" key={idx}>
                    <h6 className="heading">
                      {skill.label} <span className="float-end">{skill.value}%</span>
                    </h6>
                    <div className="single-progress">
                      <ProgressBar
                        data-aos="fade-right"
                        aria-label={skill.label}
                        data-aos-delay="100"
                        data-aos-duration="450"
                        className={skill.gradient}
                        now={skill.value}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSuccess;
