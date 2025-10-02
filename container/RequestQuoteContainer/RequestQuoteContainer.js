import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle.jsx";
import RequestQuote from "../../components/RequestQuote/RequestQuote.js";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const RequestQuoteContainer = ({ classOption }) => {
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
    <div className={`contact-form-section section  ${classOption}`}>
      <div className="container ">
        <div className="row ">
          {/* <div className="col-lg-6 ">
            <div className="col-xl-12 col-lg-12 col-12" data-aos="fade-up">
              <div className="about-image-area">
                <div className="about-image">
                  <Tilt scale={scale} transitionSpeed={4000}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "../images/about/home-one-about/home_agency_about_1.jpg"
                      }
                      alt="home_agency_about"
                    />
                  </Tilt>
                </div>

                <div className="about-image">
                  <Tilt scale={scale} transitionSpeed={4000}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "../images/about/home-one-about/home_agency_about_2.jpg"
                      }
                      alt="home_agency_about"
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
                      alt="about-shape"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="col-xl-12 col-lg-12 col-12" data-aos="fade-up">
              <div className="about-image-area d-flex justify-content-center align-items-center flex-column">
                <div className="about-image mb-4">
                  <Tilt scale={scale} transitionSpeed={4000}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "../images/about/home-one-about/home_agency_about_1.jpg"
                      }
                      alt="home_agency_about"
                    />
                  </Tilt>
                </div>

                <div className="about-image">
                  <Tilt scale={scale} transitionSpeed={4000}>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL +
                        "/images/about/home-one-about/home_agency_about_2.webp"
                      }
                      alt="home_agency_about"
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
                      alt="about-shape"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 contact-form-area background-1 my-2">
            <SectionTitle
              headingOption="fz-32"
              title="Request a Free Quote"
              subTitle="Complete the Form to Receive a Free Consultation. We Will Revert Back Within One Business Day!"
            />
            <RequestQuote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuoteContainer;
