// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import SectionTitle from "../SectionTitles/SectionTitle";
// import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
// import Tilt from "react-parallax-tilt";
// import Parallax from "parallax-js";
// import { useInView } from "react-intersection-observer";
// import VisibilitySensor from "react-visibility-sensor";
// import CountUp from "react-countup";
// import Link from "next/link";

// const HomeAbout = ({ classOption }) => {
//   const [scale] = useState(1.04);
//   const sceneEl = useRef(null);
//   const [didViewCountUp, setDidViewCountUp] = useState(false);

//   const onVisibilityChange = (isVisible) => {
//     if (isVisible) setDidViewCountUp(true);
//   };

//   useEffect(() => {
//     if (!sceneEl.current) return;

//     const parallaxInstance = new Parallax(sceneEl.current, {
//       relativeInput: true,
//     });
//     parallaxInstance.enable();

//     return () => parallaxInstance.disable();
//   }, []);

//   // Public images
//   const aboutImage1 = "/images/about/home-one-about/home_agency_about_1.webp";
//   const aboutImage2 = "/images/about/home-one-about/home_agency_about_2.webp";
//   const aboutShape = "/images/shape-animation/about-shape-1.png";

//   return (
//     <section className={`section section-padding-t90 section-padding-bottom ${classOption}`}>
//       <div className="container">
//         <SectionTitle
//           title="We provide custom software solutions that drive business growth through innovation"
//           subTitle="Delivering innovative, custom software technology solutions that empower businesses to thrive and stay ahead in a rapidly evolving digital landscape."
//         />

//         <div className="row">
//           {/* Image Area */}
//           <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
//             <div className="about-image-area">
//               <div className="about-image">
//                 <Tilt scale={scale} transitionSpeed={4000}>
//                   <Image
//                     src={aboutImage1}
//                     alt="home_agency_about_1"
//                     width={600}
//                     height={400}
//                     priority
//                   />
//                 </Tilt>
//               </div>
//               <div className="about-image">
//                 <Tilt scale={scale} transitionSpeed={4000}>
//                   <Image
//                     src={aboutImage2}
//                     alt="home_agency_about_2"
//                     width={600}
//                     height={400}
//                     priority
//                   />
//                 </Tilt>
//               </div>
//               <div className="shape shape-1" id="scene" ref={sceneEl}>
//                 <span data-depth="1">
//                   <Image src={aboutShape} alt="about-shape" width={200} height={200} />
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Content Area */}
//           <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
//             <div className="about-content-area">
//               <SectionTitleTwo
//                 subTitle="Trust, Commitment and Delivery"
//                 title="We automate manual business processes"
//               />

//               <div className="row mb-n6 mt-5 text-lg-start text-center">
//                 <div className="col-md-5 col-sm-6 col-12 mb-6">
//                   <div className="about-funfact">
//                     <div className="number">
//                       <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
//                         <CountUp end={didViewCountUp ? 50 : 0} />
//                       </VisibilitySensor>
//                       +
//                     </div>
//                     <h6 className="text">Happy Clients</h6>
//                   </div>
//                 </div>
//                 <div className="col-md-5 col-sm-6 col-12 mb-6">
//                   <div className="about-funfact">
//                     <div className="number">
//                       <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
//                         <CountUp end={didViewCountUp ? 120 : 0} />
//                       </VisibilitySensor>
//                       +
//                     </div>
//                     <h6 className="text">Completed Projects</h6>
//                   </div>
//                 </div>
//               </div>

//               <p className="justify-content">
//                 At Anthem Infotech, we focus on building trust through unwavering commitment and seamless delivery. Automating manual business processes empowers organisations to streamline operations, boost efficiency, and stay ahead in a rapidly evolving digital landscape.
//               </p>

//               {/* Example Next.js Link */}
//               {/* <Link className="btn btn-primary mt-4" href="/about">About Us</Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeAbout;



"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitles/SectionTitle";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import { useInView } from "react-intersection-observer"; // ✅ new library
import CountUp from "react-countup";
import Link from "next/link";

const HomeAbout = ({ classOption }) => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const { ref: countRef, inView } = useInView({
    triggerOnce: true, // only count once
    threshold: 0.1,    // percentage of element visible
  });

  useEffect(() => {
    if (inView) setDidViewCountUp(true);
  }, [inView]);

  // Public images
  const aboutImage1 = "/images/about/home-one-about/home_agency_about_1.webp";
  const aboutImage2 = "/images/about/home-one-about/home_agency_about_2.webp";
  const aboutShape = "/images/shape-animation/about-shape-1.png";

  useEffect(() => {
    if (!sceneEl.current) return;

    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });
    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <section className={`section section-padding-t90 section-padding-bottom ${classOption}`}>
      <div className="container">
        <SectionTitle
          title="We provide custom software solutions that drive business growth through innovation"
          subTitle="Delivering innovative, custom software technology solutions that empower businesses to thrive and stay ahead in a rapidly evolving digital landscape."
        />

        <div className="row">
          {/* Image Area */}
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <Image src={aboutImage1} alt="home_agency_about_1" width={600} height={400} priority />
                </Tilt>
              </div>
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <Image src={aboutImage2} alt="home_agency_about_2" width={600} height={400} priority />
                </Tilt>
              </div>
              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <Image src={aboutShape} alt="about-shape" width={200} height={200} />
                </span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
            <div className="about-content-area">
              <SectionTitleTwo
                subTitle="Trust, Commitment and Delivery"
                title="We automate manual business processes"
              />

              <div className="row mb-n6 mt-5 text-lg-start text-center">
                <div className="col-md-5 col-sm-6 col-12 mb-6">
                  <div className="about-funfact" ref={countRef}>
                    <div className="number">
                      <CountUp end={didViewCountUp ? 50 : 0} />+
                    </div>
                    <h6 className="text">Happy Clients</h6>
                  </div>
                </div>
                <div className="col-md-5 col-sm-6 col-12 mb-6">
                  <div className="about-funfact" ref={countRef}>
                    <div className="number">
                      <CountUp end={didViewCountUp ? 120 : 0} />+
                    </div>
                    <h6 className="text">Completed Projects</h6>
                  </div>
                </div>
              </div>

              <p className="justify-content">
                At Anthem Infotech, we focus on building trust through unwavering commitment and seamless delivery. Automating manual business processes empowers organisations to streamline operations, boost efficiency, and stay ahead in a rapidly evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
