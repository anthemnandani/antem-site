import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const AboutFive = ({ classOption }) => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div
      className={`section section-padding-top section-padding-bottom-180 ${classOption}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL + "/images/about/about-3.webp"}
                    alt="about-3"
                  />
                </Tilt>
              </div>
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL + "/images/about/about-4.webp"}
                    alt="about-4"
                  />
                </Tilt>
              </div>

              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <img
                    src={
                      process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL +
                      "/images/shape-animation/about-shape-1.png"
                    }
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>

          <div
            className="col-xl-5 col-lg-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-content-area">
              <SectionTitleTwo
                subTitle="Our Company at a Glance"
                title="Offering innovative digital solutions and expanding our services across diverse industries."
              />

              <p className="justify-content">
                Since 2011, we’ve been dedicated to delivering innovative
                digital solutions across various industries. Specialising in
                custom software, web development, and AI technologies, we blend
                creativity with technical expertise to transform businesses. Our
                commitment to brilliance and client success drives us to elevate
                enterprise standards continually.
              </p>

              <Link
                className="btn btn btn-bottom mt-xl-12 mt-lg-8 mt-md-6 mt-4"
                to={process.env.PUBLIC_URL + "/request-a-quote"}
                data-hover="Get Started"
                style={{ background: "#0e6497" }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
