import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.jsx";

const IntroThree = () => {
  return (
    // <div
    //   className="intro-section section overlay"
    //   style={{
    //     backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-image/Custom.webp)`,
    //   }}
    // >
    <BackgroundVideo
      videoSrc="/images/videos/contactus-bg.mp4"
      overlayColor="rgba(0,0,0,0.4)"
      className="intro-section bg-video"
    >
      <div className="container">
        <div className="row row-cols-lg-1 row-cols-1">
          <div className="col align-self-center">
            <div className="intro-content-two headline-active text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
              <h2 className="title ah-headline">
                Contact Us For{" "}
                <span className="text-color-span">
                  <Typewriter
                    options={{
                      strings: [
                        "Results",
                        "Growth",
                        "Solutions",
                        "Innovation",
                        "Support",
                        "Insights",
                        "Expertise",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 110,
                    }}
                  />
                </span>
                For Your Brands & Businesses
              </h2>
              <div className="desc">
                <p>
                  We are an IT company based in India. We think strategy, craft
                  design, develop digital, and create software to grow your
                  brand and business.
                </p>
              </div>
              <Link
                to={process.env.PUBLIC_URL + "/request-a-quote"}
                className="btn btn btn-bottom"
                data-hover="Get Started"
              >
                Get Started
              </Link>
              <Link
                to={process.env.PUBLIC_URL + "/Home/Services"}
                className="btn btn btn-bottom"
                data-hover="Learn More"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default IntroThree;
