import React, { useEffect, useRef, useState } from "react";
import ReactWordcloud from "react-wordcloud";
import { getToken } from "../../services/tokenservice";
import { getProjects } from "../../services/projectsservices";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

function WordCloud({ classOption }) {
  const [token, setToken] = useState(null);
  const [projects, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        setToken(data.token);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    console.log("honeyyy Wordcloudddd")
    if (token) {
      const fetchProjects = async () => {
        try {
          const data = await getProjects();

          const uniqueTechnologies = new Set();

          // Iterate over each project
          data.forEach((project) => {
            // Split technologies string into an array and trim any whitespace
            const technologiesArray = project.technolgies
              .split(",")
              .map((tech) => tech.trim());

            // Add each technology to the Set (this automatically removes duplicates)
            technologiesArray.forEach((tech) => uniqueTechnologies.add(tech));
          });

          // Convert Set back to an array if needed
          const uniqueTechnologyArray = Array.from(uniqueTechnologies);
          // Set the project with unique technologies

          const updatedTechnologyArray = uniqueTechnologyArray.map((tech) => {
            // Generate random number between 5 and 100
            const randomValue = Math.floor(Math.random() * (100 - 5 + 1)) + 5;

            // Return an object with both the technology and random value
            return {
              text: tech,
              value: randomValue,
            };
          });
          setProject(updatedTechnologyArray);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchProjects();
    }
  }, [token]);

  const options = {
    rotations: 5,
    rotationAngles: [0, -90],
    fontFamily: "sans-serif",
    fontWeight: "normal",
    padding: 5,
    fontSizes: [30, 60],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
    enableTooltip: false,
    tooltipOptions: {
      theme: "custom",
    },
    svgAttributes: {
      className: "svg-hover",
      viewBox: "5 5 1270 500",
      preserveAspectRatio: "align meetOrSlice",
    },
    textAttributes: {
      className: "wordcloud-text",
    },
  };


  
  function getCallback(callback) {
    return function (word, event) {
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;

      // Replace with internal navigation using navigate
      element.addEventListener("click", () => {
        if (isActive) {
          const slug = word.text.toLowerCase().replace(/\s+/g, "-");
          navigate(`/OurWork/${slug}`);
        }
      });

      element.style.transition = "all 0.3s ease";
      element.style.fontSize = isActive ? "300%" : "";
      element.style.zIndex = isActive ? "999" : "0";
      element.style.cursor = "pointer"; // Add pointer cursor for UX
      element.style.textDecoration = "none"; // Optional
      element.style.color = "#000"; // Optional styling
    };
  }

  const callbacks = {
    getWordTooltip: (word) => word.text,
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver"),
  };


  // function getCallback(callback) {
  //   return function (word, event) {
  //     const isActive = callback !== "onWordMouseOut";
  //     const element = event.target;

  //     // Set the word's text to link it to DuckDuckGo search
  //     element.addEventListener("click", () => {
  //       if (isActive) {
  //         window.open(
  //           window.location.origin + "/OurWork/" + encodeURIComponent(word.text),
  //           "_blank"
  //         );
  //       }
  //     });

  //     element.style.transition = "all 0.3s ease";
  //     element.style.fontSize = isActive ? "300%" : "";
  //     element.style.zIndex = isActive ? "999" : "0";
  //   };
  // }

  // const callbacks = {
  //   getWordTooltip: (word) => word.text,
  //   onWordClick: getCallback("onWordClick"),
  //   onWordMouseOut: getCallback("onWordMouseOut"),
  //   onWordMouseOver: getCallback("onWordMouseOver"),
  // };

  return (
    <div
      className={`section section-padding-t90-b100 svg-height-500 ${classOption}`}
      style={{ margin: "0px auto" }}
    >
      <div className="container">
        <SectionTitle
          headingOption="title fz-32"
          title="Anthem Infotech Leverages Innovative Technologies, Latest Tools, and Platforms to Deliver Scalable, Efficient Business Solutions"
        />
        {loading ? (
          <Loader />
        ) : (
          <div className="wordcloud-bg">
            <ReactWordcloud
              words={projects}
              options={options}
              callbacks={callbacks}
            />
          </div>
          // <div className="wordcloud-bg">
          //   <div className="wordcloud-link-wrapper text-center">
          //     {projects.map((item) => (
          //       <NavLink
          //         to={`/OurWork/${item.text.toLowerCase().replace(/\s+/g, '-')}`}
          //         className="d-inline-block m-2 fw-bold"
          //         style={{ fontSize: `${item.value}px`, color: "#000", textDecoration: "none" }}
          //         key={item.text}
          //       >
          //         {item.text}
          //       </NavLink>

          //     ))}
          //   </div>
          // </div>

        )}
      </div>
    </div>
  );
}

export default WordCloud;
