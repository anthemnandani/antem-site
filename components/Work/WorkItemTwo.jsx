import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Tilt from 'react-parallax-tilt';

const WorkItemTwo = ({ data }) => {
    const [scale] = useState(1.04);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const loaderStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    function stripHtml(html) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || "";
    }

    function sliceAfterWordComplete(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }

        // Find the last space within the slicing limit
        const lastSpaceIndex = text.lastIndexOf(" ", maxLength);

        // If there's no space, slice at maxLength
        if (lastSpaceIndex === -1) {
            return text.slice(0, maxLength) + "...";
        }

        // Slice at the last space and add "..."
        return text.slice(0, lastSpaceIndex) + "...";
    }
    const plainTextDescription = sliceAfterWordComplete(stripHtml(data.description), 168);



    // useEffect(() => {
    //     const equalizeHeights = () => {
    //         const divs = document.querySelectorAll('.ViewProjectclass');
    //         let maxHeight = 0;

    //         divs.forEach(div => {
    //             const height = div.offsetHeight;
    //             if (height > maxHeight) maxHeight = height;
    //         });

    //         divs.forEach(div => {
    //             div.style.height = `${maxHeight}px`;
    //         });
    //     };

    //     equalizeHeights();
    //     window.addEventListener('resize', equalizeHeights);

    //     return () => window.removeEventListener('resize', equalizeHeights);
    // }, []);



    useEffect(() => {
  const equalizeHeights = () => {
    const divs = document.querySelectorAll('.ViewProjectclass');
    if (window.innerWidth < 768) {
      // Mobile view → reset to auto
      divs.forEach(div => div.style.height = "auto");
      return;
    }

    let maxHeight = 0;
    divs.forEach(div => {
      div.style.height = "auto"; // Reset first
      const height = div.offsetHeight;
      if (height > maxHeight) maxHeight = height;
    });

    divs.forEach(div => {
      div.style.height = `${maxHeight}px`;
    });
  };

  equalizeHeights();
  window.addEventListener('resize', equalizeHeights);

  return () => window.removeEventListener('resize', equalizeHeights);
}, []);


    // const toTitleCase = (str) =>
    //     str.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());

    const toTitleCase = (str) =>
        str
            .split(' ')
            .map(word =>
                word.charAt(0) === word.charAt(0).toUpperCase() ? word : word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join(' ');

    return (
        <>

            <Tilt scale={scale} transitionSpeed={4000}>
                <div className="card mb-4 ViewProjectclass custom-background-2">
                    <Link to={process.env.PUBLIC_URL + `/ViewProject/${data.projectID}`} style={{ color: "unset" }} target="_blank">
                        <div className="card-img-top px-2 py-0 m-0">
                            <div id="protfolio-project-title" className="image d-flex justify-content-center align-items-center text-align-center background-4 mt-2 px-3" style={{ height: "100px" }}>
                                <h5
                                    style={{
                                        WebkitTextFillColor: 'white', // Make text color transparent to show gradient
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                                        display: 'inline-block',
                                        textAlign: 'center',
                                        padding: "0",
                                        margin: "0"
                                    }}
                                >
                                    {data.projectName}
                                </h5>
                            </div>
                        </div>
                    </Link >


                    <div className="card-body px-2 py-0 m-0">

                        <Link to={process.env.PUBLIC_URL + `/ViewProject/${data.projectID}`} style={{ color: "#222" }} target="_blank">
                            <p
                                className="card-text justify-content text-sm leading-snug" 
                                title={sliceAfterWordComplete(stripHtml(data.description), data.description.length)}
                            >
                                {plainTextDescription}
                            </p>
                        </Link>
                        <div className="tagcloud mt-1line-clamp ">
                            {(data?.technolgies || '')
                                .split(',')
                                .map((highlight) => highlight.trim())
                                .filter((highlight) => highlight)
                                .sort((a, b) => a.length - b.length) // Sort by length (shortest first)
                                .slice(0, 7) // Limit to 5 items
                                .map((highlight, index) => (
                                    <Link
                                        key={index}
                                        to={`/OurWork/${highlight
                                            .replace(/\.js\b/gi, "-js")       // Replace only ".js" at the end with "-js"
                                            .replace(/[\s_]+/g, "-")          // Replace spaces and underscores with "-"
                                            .toLowerCase()}`}                 // Convert the final string to lowercase
                                        className="line-clamp"
                                    >
                                        {toTitleCase(highlight)}
                                    </Link>


                                ))}
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                        <Link to={process.env.PUBLIC_URL + `/ViewProject/${data.projectID}`} style={{ color: "unset" }} target="_blank">
                            <button className="text-primary btn-View-More">View More</button>
                        </Link>
                    </div>
                </div>
            </Tilt >

        </>
    )
}

WorkItemTwo.propTypes = {
    data: PropTypes.object
};

export default WorkItemTwo;
