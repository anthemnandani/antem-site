import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const ServiceGrid = ({ service, classOption }) => {
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
        <div className={`section section-padding-top ${classOption}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <Tilt scale={scale} transitionSpeed={4000}>
                                <div className="container my-4">
                                    <div className="row justify-content-center">
                                        <div className="col-md-12">
                                            <div className="ratio ratio-16x9">
                                                <video
                                                    className="rounded shadow"
                                                    loop
                                                    autoPlay
                                                    muted

                                                    src={`${process.env.REACT_APP_CLOUDINARY_VIDEO_BASE_URL}/${service.at(0).video}`}
                                                    alt={service.at(0).title}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Tilt>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/images/shape-animation/about-shape-1.png`}
                                        alt="shape-animation"
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
                        {/* <div className="about-content-area"> */}
                        <SectionTitleTwo
                            subTitle="Our Company at a Glance"
                            title={service.at(0).title}
                        />

                        <p className="justify-content">
                            {service.at(0).introduction}
                        </p>
                        <p className="justify-content">
                            {service.at(0).why_choose_us}
                        </p>

                        <Link
                            className="btn btn btn-bottom mt-xl-12 mt-lg-8 mt-md-6 mt-4"
                            to={process.env.PUBLIC_URL + "/request-a-quote"}
                            data-hover="Get A Quote"
                            style={{ background: "#0e6497" }}
                        >
                            Get A Quote
                        </Link>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceGrid;
