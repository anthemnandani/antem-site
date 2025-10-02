import React from "react";
import YoutubeBackground from "react-youtube-background";
import { Link } from "react-router-dom";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.jsx";

const IntroTwo = () => {
  return (
    <BackgroundVideo
      videoSrc="/images/videos/about-us.mp4"
      overlayColor="rgba(0,0,0,0.4)"
      className="intro-section bg-video"
    >
      <div className="container">
        <div className="row row-cols-lg-1 row-cols-1">
          <div className="col align-self-center">
            <div className="intro-content-two mt-xl-12 mt-lg-12 mt-md-12 mt-sm-12 mt-xs-12">
              <h2 className="title">
                <span className="text-color-span">About</span> Us
              </h2>
              <div className="desc">
                <p>
                  Committed to delivering innovative technology solutions
                  <br /> that drive growth and efficiency for our clients.
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

export default IntroTwo;
